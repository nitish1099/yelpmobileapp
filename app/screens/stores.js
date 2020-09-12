import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Stores extends Component {
	render() {
		return (
			<View style={styles.container}>
				
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});

const mapStateToProps = (state, ownProps) => {
	return {};
};

export default connect(mapStateToProps, {})(Stores);
