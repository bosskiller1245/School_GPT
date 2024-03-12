import { SiGooglechat } from "react-icons/si";
import { LuScanLine } from "react-icons/lu";
import "./Chat.css";
import { BsMic } from "react-icons/bs";
import { BiSend } from "react-icons/bi";

const cards = [
    {
        id: 1,
        title: "My Learning",
        content: "See what you've learned so far",
    },
    {
        id: 2,
        title: "Daily Planner",
        content: "Plan your day and set goals",
    },
    {
        id: 3,
        title: "Performance Hub",
        content: "Track your progress",
    },
    {
        id: 4,
        title: "Adventure Hub",
        content: "Explore new activities",
    },
];
const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                {/* Image */}   
                <div className="chat__header__image">
                    <img src="https://cdn.discordapp.com/attachments/697413729117274133/1216917015806218301/Screenshot_2024-03-12_064327.png?ex=66022149&is=65efac49&hm=d8c7e076d4d711699eb7da82eebde15149650b2ab13b795e5e997d7757e1f79d&" alt="Ace Fitness" />
                </div>
                    {/* Login button */}
                <div className="chat__header__login">
                    <div className="btn">Log in / Sign up</div>
                </div>
            </div>
            <div className="chat__body">
                <div className="chat__body__intro">
                    Ace at your service!
                    <br />
                    How can I assist you today?
                </div>
                <div className="chat__body__cards__wrapper">
                    <div className="chat__body__cards">
                        {cards.map((card) => (
                            <div className="chat__body__card">
                                <div className="chat__body__card__title">
                                    {card.title}
                                </div>
                                <div className="chat__body__card__content">
                                    {card.content}
                                </div>
                            </div>
                         ))}            
                    </div>
                </div>
                <div className="chat__body__message">
                    <div className="chat__body__message__avatar">
                        A
                    </div>

                    <div className="chat__body__message__text">
                        <p>Hi there! I'm Ace, What can I help you with today?</p>
                    </div>
                </div>
            </div>
            <div className="chat__footer">
                <div className="chat__icon">
                    <SiGooglechat/>
                </div>
                <input type="text" placeholder="Type a message" />
                <div className="chat__icon">
                    <LuScanLine />
                </div>
                <div className="chat__icon">
                    <BsMic />
                </div>
                <div className="chat__icon">
                    <BiSend />
                </div>
            </div>
       </div>
    )
}

export default Chat
