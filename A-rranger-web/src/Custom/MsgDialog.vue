<template>
  <div class="container">
  <v-row justify="center">
      <v-card>
        <v-card-title class="text-h5">
          TEST
        </v-card-title>
        <v-card-text>공통으로 사용할 오류 모달입니다.</v-card-text>
        <v-card-actions>
          <v-btn
              color=" darken-1"
              text
              @click="$emit('close')"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
<!--    </v-dialog>-->
  </v-row>
  </div>
  </template>
<script>
export default {
  data:function(){
    return {
    }
  },props : [
    'hot_table',
  ],methods : {

  }
}
</script>
<style scoped>
</style>