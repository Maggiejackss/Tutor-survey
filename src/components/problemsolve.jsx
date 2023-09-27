import React from "react";

const Test = () => {
    return (
        <>
            <h3 className="h1-6">This is a quick problem that is solvable with simple javascript functions. Show me how you would solve it. Whether you explain it or show me a function is up to you, I just want to see how you would solve a problem.</h3>
            <h4 className="h1-6">Write a function named calculateSupply that:</h4>
            <ul>
                <li>takes 2 arguments: age, amount per day.</li>
                <li>calculates the amount consumed for rest of the life (based on a constant max age).</li>
                <li>outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"</li>
            </ul>
            <textarea className="textarea" value={solution}></textarea>
        </>
    )
}

export default Test;