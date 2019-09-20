import * as React from 'react';
import { Data } from './app.reducer';
import classNames from 'classnames';

interface Props {
    onSortTable: (key: String) => void;
    data: any[];
    sortKey: String;
    sortDir: String;
}

export class App extends React.Component<Props> {

    render(){
        const {
            onSortTable, 
            data, 
            sortDir, 
            sortKey 
        } = this.props;

        return (
            <>
                <p>Hello table</p>
                {
                    !!data.length && 
                        <table style={{ width: "100%", textAlign: "left"}}>
                            <thead>
                                <tr>
                                {
                                    Object.keys(data[0]).map(key => {
                                        const classes = classNames({[`-active-${sortDir}`]: sortKey === key });
                                        return <th 
                                            key={key} 
                                            className={classes}  
                                            onClick={() => onSortTable(key)}>{key.toLowerCase()}</th>
                                    })
                                }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item, idx) => {
                                        return (
                                            <React.Fragment key={idx}>
                                                <tr>
                                                    <td>{item.name}</td>
                                                    <td>{item.value}</td>
                                                    <td>{item.ext}</td>
                                                </tr>
                                            </React.Fragment>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                }
                
            </>
        );
    }
};