import "./Sidebar.css";
import { BsChatSquareTextFill, BsPatchQuestionFill, BsCaretRightFill } from "react-icons/bs";
const sideItems = [
    {
        id: 1,
        name: "Dashboard",
        subSection: [
            "Chat with Ace",
        ],
    },
    {
        id: 2,
        name: "My Learning",
        subSection: [],
    },
    {
        id: 3,
        name: "Daily Planner",
        subSection: [],
    },
    {
        id: 4,
        name: "Performance Hub",
        subSection: [],
    },
    {
        id: 5,
        name: "Adventure Hub",
        subSection: [],
    },
];


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                Overview
            </div>
            
            <div className="sidebar__list">
            {sideItems.map((item) => (
                <div key={item.id} className="sidebar__item">
                    <h3>{item.name}</h3>
                     {item.subSection.map((subItem) => (
                        <div className="sidebar__sub">
                            <div>{subItem}</div>
                            <BsCaretRightFill />
                        </div>
                    ))}
                </div>
            ))}
            </div>
            <div className="sidebar__footer">
                <div className="sidebar__footer__item">
                    <div className="sidebar__footer__item__icon">
                        <BsChatSquareTextFill />
                    </div>
                    <div className="sidebar__footer__item__text">
                        Community Forum
                    </div>
                </div>
                <div className="sidebar__footer__item">
                    <div className="sidebar__footer__item__icon"> 
                        <BsPatchQuestionFill />
                    </div>
                    <div className="sidebar__footer__item__text">
                        Help & Support
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Sidebar; 
