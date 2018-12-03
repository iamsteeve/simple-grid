import * as React from 'react';

interface IPropsFooter {
    children: React.ReactNode;
}

const Footer: React.FunctionComponent<IPropsFooter> = ({ children }: IPropsFooter) => (
    <footer >
        <div className="row">
            <div className="col-xs-12">
                {children}
            </div>
        </div>

    </footer>
)

export default Footer;