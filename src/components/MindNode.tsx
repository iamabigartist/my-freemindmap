import React from 'react';
import Node from "./Node";
import {ThemeConsumer} from "react-bootstrap/ThemeProvider";

const MindNode = () => {
    return (
        <Node>
            This is a simple mindmap.
            <Node>
                Structure
                <Node>
                    The title
                </Node>
                <Node>
                    The nodes content
                </Node>
                <Node>
                    node's children
                </Node>
            </Node>

            <Node>
                Abilities
                <Node>
                    Layout theme
                </Node>
                <Node>
                    Inline Katex
                </Node>
                <Node>
                   Inline Image
                </Node>
            </Node>
            <Node>
                Why my-freemindmap
                <Node>
                    The mindmap can be easily realise by react.
                </Node>
                <Node>
                    And I don't like to pay for xmind.
                </Node>
            </Node>
        </Node>
    );
};


export default MindNode;
