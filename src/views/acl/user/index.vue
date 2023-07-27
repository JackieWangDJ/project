<template>
  <div class="container">
    <!-- Component create read update delete -->
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <!-- card body -->
      <div class="crud-component">
        <el-row :gutter="20">
          <el-col :span="12" :offset="0">
            <el-input
              v-model="serachFrom"
              placeholder=""
              size="normal"
              :style="{ width: '150px' }"
              clearable
              @change=""
            ></el-input>
          </el-col>
          <el-col :span="12" :offset="0"></el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="0"></el-col>
          <el-col :span="12" :offset="0" class="btn-component">
            <el-button type="primary" size="default" @click=""
              >Search</el-button
            >
            <el-button type="primary" size="default" @click=""
              >Refresh</el-button
            >
            <el-button type="primary" size="default" @click="">Add</el-button>
          </el-col>
        </el-row>
      </div>
      <div class="main-body">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column fixed prop="date" label="Date" width="150" />
          <el-table-column prop="name" label="Name" width="120" />
          <el-table-column prop="state" label="State" width="120" />
          <el-table-column prop="city" label="City" width="120" />
          <el-table-column prop="address" label="Address" min-width="120" />
          <el-table-column prop="zip" label="Zip" width="120" />
          <el-table-column fixed="right" label="Operations" width="120">
            <template #default>
              <el-button
                link
                type="primary"
                size="small"
                @click="handleClick('delete')"
                >Delete</el-button
              >
              <el-button
                link
                type="primary"
                size="small"
                @click="handleClick('edit')"
                >Edit</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- pagination -->
      <div class="pagination">
        <el-pagination
          v-model:current-page="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
// #region pagination
const currentPage4 = ref(4);
const pageSize4 = ref(100);
const small = ref(false);
const background = ref(false);
const disabled = ref(false);
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`);
};
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`);
};
// #endregion

// #region tables
const handleClick = (howtodo: string) => {
  console.log("click:", howtodo);
};

const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
  },

  {
    date: "2016-05-03",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Home",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    state: "California",
    city: "Los Angeles",
    address: "No. 189, Grove St, Los Angeles",
    zip: "CA 90036",
    tag: "Office",
  },
];
// #endregion

// #region Component create read update delete
const serachFrom = ref("ssss");
// #endregion

const loading = ref<boolean>(true);
setTimeout(() => {
  loading.value = false;
}, 2000);
</script>
<style scoped lang="scss">
.crud-component {
  .btn-component {
    @apply flex items-center flex-row justify-end;
  }
}
.pagination {
  @apply flex items-center flex-row justify-center mt-10;
}
</style>
