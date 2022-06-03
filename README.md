# moviesMobileApp

This repository is the source code for the TheMovieDb test project for Mapiq. It is written with React Native framework, which allows targeting both IOS and Android.

Getting Started

Install Dependencies

    - cd project_folder (moviesApp in this situation)
    - yarn install
    - cd ios
    - pod install

Run Application

iOS simulator

    - run from XCode or yarn ios

Android emulator

    - start AVD (emulator) before following commands
    - yarn android

List of libraries used:

    - react-native-svg (React Native doesn’t provide default support for SVG and can't render SVGs directly, so we need to use library for displaying SVGs)

    - react-native-svg-transformer (React Native SVG transformer allows you to import SVG files in your React Native project the same way that you would in a Web application when using a library like SVGR to transform your imported SVG images into React components.)

    - react-native-fast-image (FastImage is an Image replacement that solves issues like: flickering, cache misses, low performance loading from cache. FastImage is a wrapper around SDWebImage (iOS) and Glide (Android))

    - react-native-config (Module to expose config variables to your javascript code in React Native, supporting iOS, Android and Windows)
