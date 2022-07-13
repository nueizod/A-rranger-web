<template>
  <v-container fluid>
    <v-row>
      <v-col lg=6 cols=12>
        <v-card
            class="mx-auto my-12"
            max-width="374"
            elevation="15"
            outlined
        >
          <v-divider class="mx-4"></v-divider>

          <v-card-title>파일</v-card-title>


          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="uploadFile"
            >
              Upload
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-card
            class="mx-auto my-12"
            max-width="374"
            elevation="15"
            outlined
        >
          <v-divider class="mx-4"></v-divider>

          <v-card-title>데이터베이스</v-card-title>


          <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click="uploadDB"
            >
              Upload
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import mock from './mock'

export default {
  name: 'import',
  data() {
    return {
      mock
    }
  },
  methods: {
    uploadFile() {
      // [FCM002] 오류처리 기능 구현 전역처리
      // TEST : 테스트를 위한 강제 에러리턴
      throw new Error("문제가 발생했습니다.");
      //return err;
    },
    uploadDB() {

    },


  }
}

</script>

<style src="./Import.scss" lang="scss"></style>


