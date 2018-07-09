import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export default class CenteredTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      tabHeaders: props.tabHeaders,
    };
    this.handleChange = (event, value) => {
      this.setState({ value });
    };
  }

  render() {
    const classes = this.props;

    return (
      <Paper className={classes.root}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
          fullWidth="true"
        >

          {this.state.tabHeaders.map(tab => (<Tab className="tab" label={tab.tabName} />))}

        </Tabs>
      </Paper>
    );
  }
}

CenteredTabs.propTypes = {
  tabHeaders: PropTypes.array.isRequired,
};
