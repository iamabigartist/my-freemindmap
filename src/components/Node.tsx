import React, {CSSProperties, FC, ReactChild, ReactChildren, ReactNode} from 'react';

type a = ReactChildren;

const Node: FC<{ children: ReactNode[] | ReactNode }> = ({children}) => {

    const content_style: CSSProperties = {
        border: 'solid',
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "10%",
        marginBottom: "10%"
    };

    const children_style: CSSProperties = {
        display: "flex",
        flexDirection: "column",
        flexWrap: 'nowrap',
        alignItems: 'baseline',
    };

    const total_style: CSSProperties =
        {display: 'flex', flexDirection: 'row', justifyContent: 'space-around'};

    const is_leaf = !Array.isArray(children);

    let children_nodes: ReactNode[] = is_leaf ? [] : children.slice(1, children.length);
    let content = is_leaf ? children : children[0];

    return (
        <div
            style={total_style}>
            <div style={content_style}>
                {content}
            </div>
            <div
                style={children_style}>
                {children_nodes}
            </div>
        </div>
    );


};

export default Node;
