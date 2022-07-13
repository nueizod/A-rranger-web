<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="300"
        persistent="true"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
        >
          Click Me
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="pa-3 pb-2 red lighten-2">
          알림
        </v-card-title>
        <v-card-text class="pa-5">
          오류가 발생했습니다.
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="primary"
              text
              @click="dialog = false"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "MsgDialog",
  data () {
    return {
      dialog: false,
    }
  },
}
</script>

<style scoped>
</style>