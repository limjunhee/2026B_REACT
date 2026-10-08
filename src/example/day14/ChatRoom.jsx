import { Client } from "@stomp/stompjs";
import { disconnect } from "node:cluster";
import { useEffect, useRef, useState } from "react";


// ★★★★★ 웹소켓 설치!! -> npm install @stomp/stompjs


export default function ChatRoom(props){

    // 상태 정의(메시지)
    const [message, setMessage]  = useState(''); // 입력받은 메시지
    const [ messages, setMessages] = useState([]); // 메시지들, 서버로부터 받은 메시지들

    // useRef : 상태 값을 저장하고 변경 시 렌더링을 막음. (상태값 초기화 X) == 전역변수  // 지역변수 vs 상태(useState)변수 vs 참조(useRef)변수
    // const 변수명 = useRef(초기값); , useRef는 값을 [변수명.current] 속성에 보관
    const clientRef = useRef(null); 


    // 딱 한번만 실행
    useEffect( () => {
        // Client -> Storm에서 제공하는 라이브러리
        // 2. const client = new Client( {brokerURL : "접속할백엔드브로커주소", onConnect : 접속성공이벤트/함수})
        const client = new Client( { 
            brokerURL: "ws://localhost:8080/ws-chat", // 스프링의 'registerStompEndpoints' 정의한 소켓 주소와 일치
            // 3. 만약 storm 접속 성공했다면 특정 경로를 구독
            onConnect : () => { // 접속 성공시 실행되는 이벤트(함수)
                // 특정 경로 구독 신청
                // client.subscribe("/구독경로", (message) => { 메시지 받았을 때 할 것 })
                client.subscribe("/sub/chat/room/general", (message) => {
                    // 4. 만약에 특정 경로의 구독에서 메시지를 받았을 때
                    // JSON.parse( 문자열을 JS객체로 변환 ) vs JSON.stringify( JS객체를 문자열로 변환 )
                    // AXIOS 통신은 JSON 기본값으로 자동 변환 지원!
                    messages.push( JSON.parse( message.body ) );
                    setMessages( [...messages] ); // 렌더링
                }) // 스프링의 'configureMessageBroker' 정의 주소와 일치
            }
        } )// client end

        // 5. stomp 실행
        client.activate()

        // 6. client 객체 다른 함수(전송함수) 사용하기 위해 밖으로(전역변수로)
        // useRef : 상태 값을 저장하고 변경 시 렌더링을 막음.
        // 클라이언트 객체를 다른 함수에서 사용하기 위함
        clientRef.current = client;

        // 7. 만약 컴포넌트가 사라졌다면? stomp 종료
        return () => { client.deactivate() ;}
    }, []) 


    // 전송 시 백엔드에게 메시지 보내기
    const sendMessage = ( e ) => {
        console.log("메시지 보냄")
        // 8. 만약에 소켓 객체가 없으면 실패
        if(clientRef.current == null) return null;
        
        // 9. 메시지 전송, client.publish( { destination: "/발행주소", body : 내용물 } )
        // 발행주소: 스프링의 configureMessageBroker에서 정의된 발행주소 + @MessageMapping 으로 지정된 주소
        const info = { // 스프링의 MessageDto 참조하여 구성
            type : 'TALK', roomId: "general", sender: "user", content: message, date: new Date().toISOString()
        }
        clientRef.current.publish( { destination: "/pub/chat/message" ,
            body : JSON.stringify(info) // JS객체 -> 문자열 반환
        } );
    }

    console.log( messages )

    const [isConnected, setIsConnected] = useState(false); // 방 접속 여부
    const [roomId, setRoomId] = useState(''); // 입력받은 방
    const [sender, setSender] = useState(''); // 접속자(닉네임)

    // 접속 함수
    const connect = ()=>{ }
    // 퇴장 함수
    const disconnect = ()=>{ }

    return (
        <div>
            { !isConnected ? (
                <div>
                    <input value={ roomId } placeholder="방제목/번호 입력"
                        onChange={ (e) =>{ setRoomId( e.target.value ) } } />
                    <input value={ sender } placeholder="채팅 닉네임 입력"
                        onChange={ (e) =>{ setSender( e.target.value) } } />
                    <button type="button" onClick={ connect }> 접속 </button>
                </div>
            ) : (
                <div>
                    <div>
                        <b> 방제목:{ roomId } / 접속자 : { sender } </b>
                        <button type="button" onClick={ disconnect }> 퇴장 </button>
                    </div>
                    <div>
                        { messages.map( (msg)=>{
                            <div>
                                { msg.type === 'TALK' ? (
                                    /* 내가 보낸 메시지 여부 */
                                    msg.sender === sender ? (
                                        <div>
                                            <time>{msg.date} </time>
                                            <p>{ msg.content} </p>
                                        </div>
                                    ) : ( /* 남이 보낸 메시지 */
                                        <div>
                                            <small>{ msg.sender} </small>
                                            <div>
                                                <span> {msg.content } </span>
                                                <p> {msg.date }</p>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <i> { msg.content } </i>
                                )}
                            </div>
                        } )}
                    </div>
                    <div>
                        <input value={ message } onChange={ (e)=> setMessage(e.target.value )} />
                        <button type="button" onClick={ sendMessage }> 전송 </button>
                    </div>
                </div>
            )}
        </div>
    )

    
    // return (
    //     <div>
    //         {!isConnected ? (
    //             <div>
    //                 <input value={roomId} placeholder="방제목/번호 입력"
    //                     onChange={(e) => { setRoomId(e.target.value) }} />
    //                 <input value={sender} placeholder="채팅 닉네임 입력"
    //                     onChange={(e) => { setSender(e.target.value) }} />
    //                 <button type="button" onClick={connect}> 접속 </button>
    //             </div>
    //         ) : (
    //             <div>
    //                 <div>
    //                     <b>방 제목 : {roomId} / 접속자 : {sender}</b>
    //                     <button type="button" onClick={ disconnect }> 퇴장 </button>    
    //                 </div>
    //                 <div>
    //                     { messages.map((msg) => {
    //                         <div>
    //                             {msg.type === 'TALK' ? ( /*내가 보낸 메시지 여부*/
    //                                 msg.sender === sender ? (
    //                                     <div>
    //                                         <time>{msg.date}</time>
    //                                         <p>{msg.content}</p>
    //                                     </div>
    //                                 ) : ( /* 남이 보낸 메시지 */
    //                                     <div>
    //                                         <small>{ msg.sender }</small>
    //                                         <div>
    //                                             <span>{msg.sender}</span>
    //                                             <p>{msg.date}</p>
    //                                         </div>
    //                                 )
    //                             ) : (}
                                
    //                         </div>
    //                     }) }
    //                 </div>
    //                 <div>
    //                     <input value={message} onChange={(e) => setMessage(e.target.value)} />
    //                     <button type="button" onClick={sendMessage}> 전송 </button>
    //                 </div>
    //             </div>
    //         )}
    //     </div>
    // )
}