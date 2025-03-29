import React from 'react'
import '../legoBtn.css'  // Global styles for your application
export default function LegoButton({display, color}) {
    return (
        <div>
            <div id="brick-wrap">
                <div className="brick" id={color}>
                    <p>{display}</p>
                    <div className="bits">
                        <div className="bit" id={color}>
                        </div>
                        <div className="bit" id={color}></div>
                        <div className="bit" id={color}></div>
                        <div className="bit" id={color}></div>
                    </div>
                </div>
            </div>
            <div id="brick-wrap-2">
                <div className="brick-2" id={color}>
                    <div className="bits-2" id={color}>
                        <div className="bit-2" id={color}>
                        </div>
                        <div className="bit-2" id={color}></div>
                        <div className="bit-2" id={color}></div>
                        <div className="bit-2" id={color}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
