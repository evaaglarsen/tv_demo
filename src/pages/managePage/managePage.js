import React, { Component } from "react"
import sideNav from '../../components/sideNav'
export default class ManagePage extends Component {
    render() {
        return (
            <div id="sideNav">
                <section class="sideNav">
                    <h1>Shows</h1>
                    <ul>
                        <li>Chuck</li>
                        <li>Queen of the South</li>
                    </ul>
                </section>


                <sideNav name="Chuck" allowDelete={true} />
                <sideNav name="Queen of the South" allowDelete={true} />

                <h1>New/Edit Show</h1>
                Name: <input name="showName" type="text" />
                <br /><br />
                Rating: <input rating="showRating" type="text" />
                <br /><br />
                Image URL: <input rating="showImageURL" type="url" />
                <br /><br />
                <button type="button">Create/Update</button>

            </div>
        )
    }
}