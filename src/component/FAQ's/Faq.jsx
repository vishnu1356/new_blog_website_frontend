import { useState } from "react";
import "./Faq.css"
import { FaMinus, FaPlus } from "react-icons/fa6";
const Questionanswer = (props) => {

    const {question, answer} = props;

    const [open, setOpen] = useState(false)



    return (
        <div>

            <div className="faq-parent">
                <div className="faq-upper">
                    <h1>{question}</h1>
                    <p onClick={() => setOpen(!open)}>{(open) ? <FaMinus /> : <FaPlus />}</p>
                </div>
                {
                    (open) ? <p className="faq-lower">{answer}</p>
                        : ""
                }
            </div>
        </div>
    )
}

export default Questionanswer;