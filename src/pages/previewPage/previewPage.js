import React, { Component } from "react"
import sideNav from '../../components/sideNav'
export default class PreviewPage extends Component {
    render() {
        return (
            <div>
                <section class="sideNav">
                    <h1>Shows</h1>
                    <ul>
                        <li>Chuck</li>
                        <li>Queen of the South</li>
                    </ul>
                </section>

                <section>
                    <h1>
                        <inline>Queen of the South</inline>
                        <inline>Rating: R</inline>
                    </h1>

                    <img src='../images/QueenoftheSouth.jpg' alt="Queen of the South"/>
                </section>

            </div>
        )
    }
}
