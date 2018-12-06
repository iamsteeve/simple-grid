import * as React from 'react';

export interface ISiteTitle {
    children: React.ReactNode;
}
const Title: React.FunctionComponent<ISiteTitle> = ({children}: ISiteTitle) => (
    <React.Fragment>
        <div className="container-title-site">
            <h1 className="title-site">{children}</h1>

        </div>
    </React.Fragment>
);
export default Title;