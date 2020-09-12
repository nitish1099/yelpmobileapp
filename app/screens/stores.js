import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Card } from '../components';
import theme from '../theme';

class Stores extends Component {
	render() {
		return (
			<View style={styles.container}>
				{/* container for banner and logo */}
				<View style={styles.heroContainer}>
					<Image source={theme.images.banner} style={styles.banner} />
					<View style={styles.logoContainer}>
						<Image source={theme.images.yelpLogo} style={styles.logo} />
					</View>
				</View>
				{/* container for page title */}
				<View style={styles.titleContainer}>
					<Text style={styles.title}>
						Ice-Cream Shops <Text style={styles.divider}> | </Text> <Text style={styles.location}>Redwood City</Text>
					</Text>
				</View>
				{/* container for business listing */}
				<View style={styles.listingContainer}>
					<Card />
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	heroContainer: {
		position: 'relative',
	},
	banner: {
		width: '100%',
		height: 200,
		resizeMode: 'cover',
	},
	logoContainer: {
		width: 150,
		height: 150,
		position: 'absolute',
		top: 125,
		left: 125,
		backgroundColor: theme.colors.white,
		shadowColor: theme.colors.shadowColorDark,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 13.3,
		shadowRadius: 2.7,
		elevation: 5,
		justifyContent: 'center',
		alignItems: 'center'
	},
	logo: {
		width: 100,
		height: 100,
		resizeMode: 'contain'
	},
	titleContainer: {
		marginTop: 125,
		alignItems: 'center'
	},
	title: {
		fontSize: 20,
		color: theme.colors.red,
		fontWeight: 'bold'
	},
	divider: {
		fontWeight: 'normal',
		color: theme.colors.mediumGray
	},
	location: {
		fontWeight: 'normal'
	},
	listingContainer: {
		marginTop: 50
	}

});

const mapStateToProps = (state, ownProps) => {
	return {};
};

export default connect(mapStateToProps, {})(Stores);
