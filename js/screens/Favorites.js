import * as React from 'react';
import * as Haptics from 'expo-haptics';
import { ScrollView, StyleSheet, View } from 'react-native';

import FavoritesListItem from '../components/FavoritesListItem';
import CustomFont from '../components/CustomFont';
import SearchButton from '../components/SearchButton';

export default class Favorites extends React.Component {
    state = {
        recipes: [
            {
                image: null,
                title: 'Spaghetti Bolognese',
                duration: '14',
                nationality: 'ita',
                ingredients: [
                    { amount: '100g', ingredient: 'Spaghetti' },
                    { amount: '3', ingredient: 'Tomaten' }
                ],
                preparation: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                favorite: true
            },
            {
                image: null,
                title: 'Spaghetti Carbonara',
                duration: '15',
                nationality: 'ita',
                ingredients: [
                    { amount: '200g', ingredient: 'Spaghetti' },
                    { amount: '10g', ingredient: 'Bauchspeck geschnitten' },
                    { amount: '2', ingredient: 'Sahne' }

                ],
                preparation: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata.',
                favorite: true
            }
        ],
        filter: null
    };


    componentDidMount() {

        // change header title
        this.props.navigation.setOptions({ title: <CustomFont>Favoriten</CustomFont> });
    }


    render() {

        let recipes = this.state.recipes.map((recipe, i) => {
            return (
                <FavoritesListItem
                    key={'recipe_' + i}
                    title={recipe.title}
                    duration={recipe.duration}
                    nationality={recipe.nationality}
                    image={recipe.image}
                    favorite={recipe.favorite}
                    onPress={
                        () => {
                            this.props.navigation.navigate('Recipe', { recipe });
                            Haptics.impactAsync('light')
                        }
                    }
                />
            );
        });

        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {recipes}
                </ScrollView>

                <SearchButton
                    onChange={(filter) => this.setState({ filter: filter })}
                />
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    scrollContainer: {
        paddingTop: 20,
        alignItems: 'center'
    }
});