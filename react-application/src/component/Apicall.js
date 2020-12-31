import React from 'react';
class Apicall extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null
        };
    };
    componentDidMount() {
        fetch("	http://dummy.restapiexample.com/api/v1/employees").then((resp) => {
            resp.json().then((result) => {
                // console.log(result.data)
                this.setState({ user: result.data })
            }).catch((err) => {
                console.log(err)
            });
        });
    };
    render() {
        return (
            <div>
                <h1>User Data</h1>
                {
                    this.state.user ?
                        this.state.user.map((item, i) =>
                            <div>
                                <p>
                                    {i}----
                                    {item.employee_name}-----
                                    {item.employee_age}
                                </p>
                            </div>
                        )

                        :
                        null
                }

            </div>
        )
    }
}
export default Apicall;