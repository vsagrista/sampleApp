import React, { Component } from 'react';
import voters from '../DATA/voters';
voters.sort(dynamicSort("lastName"));


function dynamicSort(property) {
    console.log('sorting')
    var sortOrder = 1;

    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a, b) {
        if (sortOrder === -1) {
            return b[property].localeCompare(a[property]);
        } else {
            return a[property].localeCompare(b[property]);
        }
    }
}


class List extends Component {
    constructor() {
        super();
        this.state = {
            voters: voters,
            sortedVoted: false
        }
    }

    handleSort = (property) => {
        this.setState({
            voters: this.state.voters.sort(dynamicSort(property)),
            sortedVoted: property === "voted"
        })
    }

    handleVotedSort = () => {
        this.state.sortedVoted 
            ? this.setState({
                voters: this.state.voters.reverse(),
                sortedVoted: true
            }) 
            : this.handleSort("voted");
    }



    


    render() {
        return (
            <div className="List">
                <div className="container">
                    <nav className="navbar navbar-light bg-light">
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                </div>
                <div className="height container">
                    <table className="table table-sortable" id="tables">
                        <thead className="thead-dark">
                            <tr>
                                {/* <b>#</b> <i class="fa fa-fw fa-sort"></i> */}
                                <th scope="col">#</th>
                                <th scope="col" onClick={() => this.handleSort("name") } className="sort-header">Name</th>
                                <th scope="col" onClick={() => this.handleSort("lastName")} className="sort-header">Last Name</th>
                                <th scope="col" onClick={() => this.handleVotedSort()}className="sort-header">Has Voted </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.voters.map((voter, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{voter.name}</td>
                                        <td>{voter.lastName}</td>
                                        <td className={voter.voted === "YES" ? "green-color" : "red-color" }>{voter.voted} </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                {/* <div class="container">
                    <div class="control-list">
                        <a id="prevList" onclick="GetPrevList()" class="btn btn-secondary" href="#">Prev</a>
                        <a id="nextList" onclick="GetNextList()" class="btn btn-secondary" href="#">Next</a>
                    </div>
                </div> */}

            </div>
        );
    }
}

export default List;