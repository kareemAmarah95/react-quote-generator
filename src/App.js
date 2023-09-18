import "./App.css";
import React, { useState } from "react";
import {
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

import { RiTelegramLine } from "react-icons/ri";
import {
  FacebookShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";
import {
  FacebookIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber",
  };
  const [quote, setQuote] = useState(quoteData);

  const generateQuote = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        return setQuote(data);
      });
  };

  const copy = () => {
    navigator.clipboard.writeText(
      quote.author + " once said: " + quote.content
    );
    alert("copied");
  };

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns">
          <button onClick={copy} className="btn">
            Copy
          </button>
          <button onClick={generateQuote}>Generate Another Quote</button>
          <div className="parent-flex">
            <div className="whatsapp">
              <WhatsappShareButton url={`${quote.content} By ${quote.author}`}>
                <WhatsappIcon logofillcolor="white" round={true} />
              </WhatsappShareButton>
            </div>
            <div className="facebook">
              <FacebookShareButton
                url={`https://www.facebook.com/home.php`}
                quote={`${quote.content} By ${quote.author}`}
                hashtag={`#Quotes`}
              >
                <FacebookIcon logofillcolor="white" round={true} />
              </FacebookShareButton>
            </div>
            <div className="telegram">
              <TelegramShareButton
                url={`https://web.telegram.org/a/#1987044822`}
                title={`${quote.content} By ${quote.author}`}
              >
                <TelegramIcon logofillcolor="white" round={true} />
              </TelegramShareButton>
            </div>
            <div className="twitter">
              <TwitterShareButton
                url="https://twitter.com/home"
                // url={`${quote.content} By ${quote.author}`}
                title={`${quote.content} By ${quote.author}`}
                hashtag="Quotes"
              >
                <TwitterIcon logofillcolor="white" round={true} />
              </TwitterShareButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
