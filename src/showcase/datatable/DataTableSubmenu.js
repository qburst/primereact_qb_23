import React, {Component} from 'react';
import {Link} from 'react-router';

export class DataTableSubmenu extends Component {

    render() {
        return (
            <div className="content-section SubSubMenu ui-helper-clearfix">
                <ul>
                    <li><Link to="/datatable">&#9679; Basic</Link></li>
                    <li><Link to="/datatable/paginator">&#9679; Paginator</Link></li>
                </ul>
            </div>
        );
    }

}