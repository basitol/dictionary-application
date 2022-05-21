import React from "react";
import "./Definitions.css";

const Definitions = ({ meanings, words, category }) => {
  return (
    <div className="definitions">
      <div className="meanings">
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
