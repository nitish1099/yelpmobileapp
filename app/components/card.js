import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const Card = ({}) => (
	<View style={styles.container}>
		<View style={styles.imageContainer} />
        <View style={styles.info}>
            {/*business info */}
            <Text style={styles.name} numberOfLines={1}>Diggin</Text>
            <Text style={styles.rating}>4.5</Text>
            <Text style={styles.address}>Anand Lok</Text>
            {/* review container for customer name and excerpt */}
            <View style={styles.reviewContainer}>
                <View style={styles.reviewInfo}>
                    <Text style={styles.reviewUser}>
                        Nitish Anand <Text style={styles.reviewRated}>rated</Text>
                    </Text>
                    <View style={styles.reviewRatingContainer}>
                        <Text style={styles.reviewRating}>5</Text>
                    </View>
                </View>
                <Text style={styles.reviewText} numberOfLines={3}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet neque ultricies maximus condimentum. Nam a ornare ipsum, vel faucibus augue. Pellentesque dictum nisi sed turpis porta, a cursus orci aliquam. Phasellus ut enim convallis, rhoncus erat sed, laoreet nulla. Fusce tristique neque nunc."</Text>
            </View>
        </View>
	</View>
);

export { Card };

const styles = StyleSheet.create({
	container: {
        width: '95%',
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: theme.colors.white,
		shadowColor: theme.colors.shadowColorLight,
		shadowOffset: {
			width: 0,
			height: 0,
		},
		shadowOpacity: 13.3,
		shadowRadius: 2.7,
		elevation: 3,
	},
    imageContainer: {
        width: 150,
        height: 150,
        backgroundColor: theme.colors.mediumGray
    },
    info: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1
    },
    name: {
        fontSize: 18,
        color: theme.colors.red,
        fontWeight: 'bold',
        marginBottom: 5
    },
    rating: {
        fontSize: 14,
        color: theme.colors.red,
        marginBottom: 2.5
    },
    address: {
        fontSize: 14,
        color: theme.colors.lightGray,
    },
    reviewContainer: {
        flex: 1,
    },
    reviewInfo: {
        marginTop: 10,
        alignItems: 'center',
        flexDirection: 'row'
    },
    reviewUser: {
        fontSize: 14,
        fontWeight: 'bold',
        color: theme.colors.lightGray
    },
    reviewRated: {
        fontWeight: 'normal',
    },
    reviewRatingContainer: {
        width: 30,
        height: 18,
        marginLeft: 5,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.darkGray,
    },
    reviewRating: {
        color: theme.colors.white,
        fontSize: 12,
    },
    reviewText: {
        marginTop: 5,
        color: theme.colors.lightGray,
        fontSize: 12,
    }

});
