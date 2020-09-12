import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import theme from '../theme';

const Card = ({ data }) => {

    const renderStars = (rating) => {
        const fullStarCount = Math.floor(rating);
        const halfStarCount = rating % 1 === 0 ? 0 : 1;
        return (
            [...Array(5)].map((item, index) => {
                if (index < fullStarCount) {
                    return <Image source={theme.images.starFull} style={styles.star}/>;
                } else if (halfStarCount) {
                    return <Image source={theme.images.starHalf} style={styles.star}/>;
                } else {
                    return <Image source={theme.images.starEmpty} style={styles.star}/>;
                }
            })
        )

    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: data.photos[0] }} style={styles.image}/>
            </View>
            <View style={styles.info}>
                {/*business info */}
                <Text style={styles.name} numberOfLines={1}>{data.name}</Text>
                <View style={styles.ratingContainer}>
                    <View style={styles.starsContainer}>
                        {renderStars(data.rating)}
                    </View>
                    <Text style={styles.rating}>{data.rating}</Text>
                </View>

                <Text style={styles.address}>{data.location.address1}, {data.location.city}</Text>
                {/* review container for customer name and excerpt */}
                <View style={styles.reviewContainer}>
                    <View style={styles.reviewInfo}>
                        <Text style={styles.reviewUser}>
                            {data.reviews[0].user.name} <Text style={styles.reviewRated}>rated</Text>
                        </Text>
                        <View style={styles.reviewRatingContainer}>
                            <Text style={styles.reviewRating}>{data.reviews[0].rating}</Text>
                        </View>
                    </View>
                    <Text style={styles.reviewText} numberOfLines={3}>"{data.reviews[0].text}"</Text>
                </View>
            </View>
        </View>
    )
}

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
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 15,
	},
    imageContainer: {
        width: 150,
        height: 150,
        backgroundColor: theme.colors.mediumGray
    },
    image: {
        flex: 1,
        resizeMode: 'cover'
    },
    info: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        flex: 1
    },
    name: {
        fontSize: 16,
        color: theme.colors.red,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
    },
    starsContainer: {
        flexDirection: 'row',
        marginTop: 1,
        marginRight: 5
    },
    star: {
        height: 14,
        width: 14,
        resizeMode: 'contain'
    },
    rating: {
        fontSize: 14,
        color: theme.colors.red,
        marginBottom: 2,
    },
    address: {
        fontSize: 14,
        color: theme.colors.lightGray,
    },
    reviewContainer: {
        flex: 1,
    },
    reviewInfo: {
        marginTop: 12.5,
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
