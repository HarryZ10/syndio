import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

/**
 * Tabs component
 * @param {object} props
 * @returns {JSX}
 */
class Tabs extends Component {

    // proptypes is a way to validate the props passed to the component
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }
  
    // this function is called when a tab is clicked
    constructor(props) {

        // call the parent constructor with the props
        super(props);

        // initialize the state of the component with the first tab
        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }
  
    onClickTabItem = (tab) => { this.setState({ activeTab: tab }); }

render() {

    const { onClickTabItem, props: { children }, state: { activeTab } } = this;

    return (
        <div>
            <div className="tabs container-fluid">

                {/* tabList is the container for the tabs */}
                <ol className="tab-list d-flex align-items-center">

                    {/* map through the children and return a tab for each one */}
                    {children.map(child => {

                        // get the label from the child
                        const { label } = child.props;

                        // return a tab for the child
                        return (
                            <Tab activeTab={activeTab} key={label} label={label} onClick={onClickTabItem}/>
                        );
                    })}
                </ol>     
            </div>
            {/* tabContent is the container for the content of the active tab */}
            <div className="tab-content">

            {/* map through the children and return the active tab's content */}
            {children.map(child => {

                // get the label from the child and check if it matches the active tab
                if (child.props.label !== activeTab)
                    return undefined;
                // return the child's content
                else
                    return child.props.children;
            })}
        </div>
     </div>
        
        );
    }
}


export default Tabs;