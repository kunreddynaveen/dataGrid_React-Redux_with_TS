import "./App.css";
import { useDispatch} from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state";
import { useEffect } from "react";
// import { RootState } from './state/reducers';

import { GridTable } from "./components/ts/gridTable";
import { Details } from "./components/ts/details";

function App() {
    interface gridState {
        data: {
            Name: string;
            Date: string | number;
            Time: string | number;
            Details: string;
            RocketName: string;
            Site: string;
        }[];
    }
    let gridData: gridState["data"] = []; //gridData is an array of objects--each fied with porperties of Name, Date and Details
    // const state = useSelector((state:any) => state.spaceXdata)
    const dispatch = useDispatch();

    const { InitialUpdate } = bindActionCreators(actionCreators, dispatch);

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/launches?limit=50&order=desc")
            .then((resp) => resp.json())
            .then((data) => {
                // console.log(data);
                gridData = data.map((item: any, i: number) => {
                    let d = item.details;
                    d = !d ? "No Details Available" : d; 
                    let date = item.launch_date_utc
                    console.log(date.split("T"));
                    return {  //constructing an object of required data fields from the API data
                        Name: item.mission_name,
                        // Date: item.launch_date_utc,
                        Date: date.split("T")[0],
                        Time:date.split("T")[1],
                        Details: d,
                        RocketName: item.rocket.rocket_name,
                        Site: item.launch_site.site_name_long,
                    };
                });
                InitialUpdate(gridData);//updates the store with API data
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="App">
            <h2>Hey there! Here you can find the details about SpaceX Launches</h2>
            <GridTable></GridTable>
            <Details></Details>
        </div>
    );
}

export default App;
