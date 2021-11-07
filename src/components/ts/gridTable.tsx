import { AgGridReact, AgGridColumn } from "ag-grid-react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
// import { useEffect, useState } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import "../css/gridTable.css";

export const GridTable = () => {
    let data: any = useSelector((state) => state);
    const dispatch = useDispatch();
    const { LaunchDetails } = bindActionCreators(actionCreators, dispatch);
    // console.log(data);
    return (
        <div className="ag-theme-balham gridTable">
            <h3>Latest SpaceX Launches</h3>
            <AgGridReact rowData={data.spaceXdata} pagination={true} paginationPageSize={10}>
                <AgGridColumn field="Name" sortable={true} filter={true} floatingFilter={true}></AgGridColumn>
                <AgGridColumn field="Date" sortable={true}></AgGridColumn>
                <AgGridColumn field="Time"></AgGridColumn>
                <AgGridColumn
                    field="Details"
                    cellRendererFramework={(params: any) => {
                        return (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    // console.log(params);
                                    // console.log(data.launchDetails);
                                    let details = {
                                        Name: params.data.RocketName,
                                        Site: params.data.Site,
                                        Details: params.data.Details,
                                    };
                                    LaunchDetails(details);
                                }}
                            >
                                View Rocket Details
                            </button>
                        );
                    }}
                ></AgGridColumn>
            </AgGridReact>
        </div>
    );
};
