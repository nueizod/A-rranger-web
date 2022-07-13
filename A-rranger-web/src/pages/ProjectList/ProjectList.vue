<template>
  <v-container fluid>
    <msg-dialog></msg-dialog>

  </v-container>
</template>


<script>
import { getAllProjectMetas } from '@/api/index'
import MsgDialog from '@/Custom/MsgDialog'

export default {
  name: 'ProjectList',
  components: { MsgDialog },
  data() {
    return {
      projectList: [],
      dialog: false,
    }
  },
  created() {
    this.projectList = [];
    getAllProjectMetas()
        .then((res) => {
          console.log(res.status);
          console.log(res.data);
          console.log('---------------------------1');
          let json = res.data;
          let projects = Object.values(json.projects);// project
          console.log('---------------------------2');
          console.log(projects);
          // project 만큼.
          for (let project of projects) {
            console.log(project);
            console.log(project.created);
            console.log(project.modified);
            console.log(project.tags);
          }

          // keys = Object (res.data.keys);
          // for (let i = 0; i < keys.length; i++) {
          //   let key = keys[i];
          //   console.log("key : " + key + ", value : " + json[key]);
          // }
          console.log('---------------------------3');
          //console.log(res.data.projects.keys().created);
          console.log('---------------------------4');

        }).catch((error) =>{
          this.dialog = true;
          console.log(error);
    })
  },
  methods: {

  }
}

</script>
