<template>
  <div class="text-xs-center">
    <v-menu transition="scale-transition" origin="center center">
      <template v-slot:activator="{ on }">
        <v-btn dark color="primary" v-on="on">Scale Transition</v-btn>
      </template>
      <v-list>
        <v-list-tile v-for="n in 5" :key="n">
          <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>
