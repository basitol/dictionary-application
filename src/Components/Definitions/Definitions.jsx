import React from "react";
import "./Definitions.css";

const Definitions = ({ meanings, words, category }) => {
  return (
    <div className="definitions">
      <div className="meanings">
        {words && category === "en" && meanings[0] && (
          <audio
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              width: "100%",
            }}
            controls
          >
            Your browser does not support the <code>audio</code> element.
          </audio>
        )}
        {words === "" ? (
          <span className="subTitle">Start by typing a word</span>
        ) : (
          meanings.map((meaning) =>
            meaning.meanings.map((item) =>
              item.definitions.map(
                (def) => (
                  console.log(def),
                  (
                    <div
                      className="definition"
                      style={{ color: "#000", backgroundColor: "#fff" }}
                    >
                      <b>{def.definition}</b>
                      <hr
                        style={{
                          backgroundColor: "black",
                          width: "100%",
                          height: "1px",
                        }}
                      />
                      {def.example && (
                        <span>
                          <b>Example : </b> {def.example}
                        </span>
                      )}
                      {def.synonyms.length > 0 && (
                        <span>
                          <b>Synonyms : </b>
                          {def.synonyms.map((synonym) => `${synonym},`)}
                        </span>
                      )}
                    </div>
                  )
                )
              )
            )
          )
        )}
      </div>
    </div>
  );
};

export default Definitions;
