import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
  // Dummy data for highlights and posts
  const highlights = [
    { id: '1', title: 'Travel', image: 'https://via.placeholder.com/70' },
    { id: '2', title: 'Food', image: 'https://via.placeholder.com/70' },
    { id: '3', title: 'Fitness', image: 'https://via.placeholder.com/70' },
  ];

  const posts = Array.from({ length: 123 }, (_, i) => ({
    id: String(i + 1),
    image: 'https://via.placeholder.com/100',
  }));

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>123</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>198</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>174</Text>
            <Text style={styles.statLabel}>Following</Text>
          </View>
        </View>
      </View>

      {/* Bio Section */}
      <View style={styles.bio}>
        <Text style={styles.username}>Sonu Lohan</Text>
        <Text>App developer</Text>
        <Text>Hisar📍</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Share profile</Text>
        </TouchableOpacity>
      </View>

      {/* Highlights */}
      <FlatList
        horizontal
        data={highlights}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.highlightItem}>
            <Image source={{ uri: item.image }} style={styles.highlightImage} />
            <Text style={styles.highlightLabel}>{item.title}</Text>
          </View>
        )}
        contentContainerStyle={styles.highlightsList}
      />

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.tab}>Posts</Text>
        <Text style={styles.tab}>Reels</Text>
        <Text style={styles.tab}>Tagged</Text>
      </View>

      {/* Gallery */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <Image source={{ uri: item.image }} style={styles.postImage} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    marginLeft: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: 'gray',
  },
  bio: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  button: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  highlightsList: {
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  highlightItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  highlightImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: 'gray',
  },
  highlightLabel: {
    fontSize: 12,
    marginTop: 4,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingVertical: 8,
  },
  tab:{
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: Dimensions.get('window').width / 3,
    height: Dimensions.get('window').width / 3,
  },
});

export default ProfileScreen;