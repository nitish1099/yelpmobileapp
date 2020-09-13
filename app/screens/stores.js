import { connect } from 'react-redux';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from 'react-native';
import { Card } from '../components';
import theme from '../theme';
import { getBusinesses } from '../actions';

class Stores extends Component {

	componentDidMount() {
		this.props.getBusinesses();
	}

	// render loader before getBusinesses call is complete
	_renderLoader() {
		if (this.props.loading) {
			return (
				<View style={styles.loaderContainer}>
					<ActivityIndicator size="large" />
				</View>
			);
		}
		return null;
	}

	// render item for the business listing
	_renderBusiness({ item }) {
		return (
			<Card data={item} />
		);
	}

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
				{/*container for loader*/}
				{this._renderLoader()}
				{/* container for business listing */}
				<View style={styles.listingContainer}>
					<FlatList
						data={this.props.businesses}
						renderItem={this._renderBusiness}
						keyExtractor={item => item.id}
						contentInsetAdjustmentBehavior="automatic"
					/>
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
		height: 250,
		resizeMode: 'cover',
	},
	logoContainer: {
		width: 150,
		height: 150,
		position: 'absolute',
		top: 175,
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
		alignItems: 'center',
	},
	logo: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
	},
	titleContainer: {
		marginTop: 125,
		alignItems: 'center',
	},
	title: {
		fontSize: 16,
		color: theme.colors.red,
		fontWeight: 'bold',
	},
	divider: {
		fontWeight: 'normal',
		color: theme.colors.mediumGray,
	},
	location: {
		fontWeight: 'normal',
	},
	listingContainer: {
		flex: 1,
		marginTop: 30,
	},
	loaderContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

});

const mapStateToProps = ({ stores }, ownProps) => {
	return {
		loading: stores.loading,
		businesses: stores.businesses,
	};
};

export default connect(mapStateToProps, { getBusinesses })(Stores);
