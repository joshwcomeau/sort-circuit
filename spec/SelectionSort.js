describe("Selection Sort", function() {
  var small_array, big_array;

  beforeEach(function() {
    small_array = [1, 8, 4, 0, 5, 4]
    big_array = [4,-2,3,7,11,2,3.5,102,1,0,14];
  });


  it("should swap two non-equal numbers", function() {
    expect(selection_compare(small_array, 1, 2)).toEqual([1, 4, 8, 0, 5, 4]);
  });

  it("should do nothing when the numbers are equal", function() {
    expect(selection_compare(small_array, 2, 5)).toEqual(small_array);
  });

  it("should find the smallest number in an array", function() {
    expect(get_smallest_index(big_array, 0)).toEqual(1);
  });

  it("should return a sorted array!", function() {
    expect(selection_sort(big_array)).toEqual([-2, 0, 1, 2, 3, 3.5, 4, 7, 11, 14, 102]);
  });



  // it("should be able to play a Song", function() {
  //   player.play(song);
  //   expect(player.currentlyPlayingSong).toEqual(song);

  //   //demonstrates use of custom matcher
  //   expect(player).toBePlaying(song);
  // });

  // describe("when song has been paused", function() {
  //   beforeEach(function() {
  //     player.play(song);
  //     player.pause();
  //   });

  //   it("should indicate that the song is currently paused", function() {
  //     expect(player.isPlaying).toBeFalsy();

  //     // demonstrates use of 'not' with a custom matcher
  //     expect(player).not.toBePlaying(song);
  //   });

  //   it("should be possible to resume", function() {
  //     player.resume();
  //     expect(player.isPlaying).toBeTruthy();
  //     expect(player.currentlyPlayingSong).toEqual(song);
  //   });
  // });

  // // demonstrates use of spies to intercept and test method calls
  // it("tells the current song if the user has made it a favorite", function() {
  //   spyOn(song, 'persistFavoriteStatus');

  //   player.play(song);
  //   player.makeFavorite();

  //   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  // });

  // //demonstrates use of expected exceptions
  // describe("#resume", function() {
  //   it("should throw an exception if song is already playing", function() {
  //     player.play(song);

  //     expect(function() {
  //       player.resume();
  //     }).toThrowError("song is already playing");
  //   });
  // });
});
