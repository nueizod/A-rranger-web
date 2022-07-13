<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">Recent</h1>
      <v-row>
        <v-col cols=12>
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Project List</p>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                <tr>
                  <th class="text-left pa-6">MODIFIED</th>
                  <th class="text-left">NAME</th>
                  <th class="text-left">NAME</th>
                  <th class="text-left">TAGS</th>
                  <th class="text-left">CREATOR</th>
                  <th class="text-left">SUBJECT</th>
                  <th class="text-left">DESCRIPTION</th>
                  <th class="text-left">ROWCOUNT</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(project, index) of projects" :key="index">
                  <td class="pa-6">>{{ project.modified }}</td>
                  <td>{{ project.name }}</td>
                  <td>{{ project.tags }}</td>
                  <td>{{ project.creator }}</td>
                  <td>{{ project.subject }}</td>
                  <td>{{ project.description }}</td>
                  <td>{{ project.rowcount }}</td>
                </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { getAllProjectMetas } from '@/api/index'
import MsgDialog from '@/Custom/MsgDialog'

export default {
  name: 'ProjectList',
  // components: { MsgDialog },
  data() {
    return {
      projects: [],
    }
  },
  created() {
    getAllProjectMetas()
        .then((res) => {
          console.log(res);
          this.projects = Object.values(res.data.projects);// project

          // project 만큼
          // for (let project of projects) {
          //   console.log(project);
          //   console.log(project.created);
          // }

          // [FCM002] 오류처리 기능 구현 전역처리
          // 테스트 방법 : 해당 api call 실패시킴
        }).catch((error) =>{
          this.$modal.show(MsgDialog, {
            hot_table : 'data',
            modal : this.$modal },{
            name: 'dynamic-modal',
            width : '330px',
            height : '130px',
            draggable: true,
          })
          console.log(error);
    })
  },
  methods: {

  }
}

</script>
