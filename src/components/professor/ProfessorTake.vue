//指挥人员紧急事件处理界面
<template>
  <div>
    <!-- 面包屑导航区 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/professor' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>ttmaxxx 的部分作品</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区 -->
    <el-card class="box-card">
      <!-- 搜索与添加区 -->
      <!-- 栅格布局 -->


      <div class="tablecontainer" >
        <div style="">
          <ul class="infinite-list" v-infinite-scroll="load" style="max-height: 600px; overflow:auto; list-style-type: none">
            <li><img src="../../assets/ttmaxxx/1.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/2.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/3.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/4.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/5.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/6.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/7.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/8.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/9.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/10.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/11.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/12.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/13.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/14.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/15.jpg" style="height: 40%; width: 40%"></li>
            <li><img src="../../assets/ttmaxxx/16.jpg" style="height: 40%; width: 40%"></li>
          </ul>
        </div>
      </div>

    </el-card>
  </div>
</template>
// v-model="activeIndex"
<script>
  export default {
    inject: ["reload"],
    data() {
      return {
        tableDataBegin: [{
            id: "1",
            name: "自然灾害水旱灾害",
            num: "360",
            type: "一级",
            creatTime: "2021-05-03 11:11:11",
            person: "桃桃",
            phone: "9011910826",
            seq: "16",
            alarmTime: "2021-05-03",
            enterprise: "石油公司",
            lastModifyTime: "2021-05-03 12:55:55",
            lastModifyPerson: "指挥人员1",
            state: "已移交专家"
          },
          {
            id: "2",
            name: "公交倒翻",
            num: "1700",
            type: "二级",
            creatTime: "2021-05-03 11:11:11",
            person: "苹苹",
            phone: "9039847561",
            seq: "3",
            date: "2021-1-17",
            alarmTime: "2021-05-03",
            enterprise: "石油公司",
            lastModifyTime: "2021-05-03 12:55:55",
            lastModifyPerson: "指挥人员1",
            state: "已移交专家"
          },
          {
            id: "3",
            name: "地震灾害",
            num: "1500",
            type: "五级",
            creatTime: "2021-05-03 11:11:11",
            person: "苹苹",
            phone: "9039847561",
            seq: "4",
            date: "2020-05-17",
            alarmTime: "2021-05-03",
            enterprise: "石油公司",
            lastModifyTime: "2021-05-03 12:55:55",
            lastModifyPerson: "指挥人员1",
            state: "已移交专家"
          },
          {
            id: "4",
            name: "地震灾害",
            num: "600",
            type: "五级",
            creatTime: "2021-05-03 11:11:11",
            person: "苹苹",
            phone: "9039847561",
            seq: "16",
            date: "2021-05-03",
            alarmTime: "2021-05-03",
            enterprise: "石油公司",
            lastModifyTime: "2021-05-03 12:55:55",
            lastModifyPerson: "指挥人员1",
            state: "已移交专家"
          },
          {
            id: "5",
            name: "矿泉水污染",
            num: "25",
            type: "一级",
            creatTime: "2021-05-03 11:11:11",
            person: "桃桃",
            phone: "9011910826",
            seq: "19",
            date: "2021-05-03",
            alarmTime: "2021-05-03",
            enterprise: "石油公司",
            lastModifyTime: "2021-05-03 12:55:55",
            lastModifyPerson: "指挥人员1",
            state: "已移交专家"
          },
        ],
        tableDataName: "",
        tableDataEnd: [],
        currentPage: 1,
        pageSize: 8,
        totalItems: 0,
        filterTableDataEnd: [],
        flag: false,
        multipleSelection: [],
        // //控制添加信息对话框的显示与隐藏
        // addDialogVisible: false,
        //控制修改信息对话框的显示与隐藏
        editDialogVisible: false,
        //修改备注的验证规则对象
        modifyFormRules: {
          comments: [{
            required: true,
            message: "请输入备注",
            trigger: "blur"
          }]
        },
        activeIndex: 1,
        //查询到的信息修改对象
        editForm: {}
      };
    },
    //生命周期函数
    created() {
      this.totalItems = this.tableDataBegin.length;
      if (this.totalItems > this.pageSize) {
        for (let index = 0; index < this.pageSize; index++) {
          this.tableDataEnd.push(this.tableDataBegin[index]);
        }
      } else {
        this.tableDataEnd = this.tableDataBegin;
      }
    },

    //当前页面的一些事件处理函数
    methods: {
      //前端搜索功能需要区分是否检索,因为对应的字段的索引不同
      //用两个变量接收currentChangePage函数的参数
      doFilter() {
        if (this.tableDataName == "") {
          this.$message.warning("查询条件不能为空！");
          return;
        }
        this.tableDataEnd = [];
        //每次手动将数据置空,因为会出现多次点击搜索情况
        this.filterTableDataEnd = [];
        this.tableDataBegin.forEach((value, index) => {
          if (value.name) {
            if (value.name.indexOf(this.tableDataName) >= 0) {
              this.filterTableDataEnd.push(value);
            }
          }
        });
        //页面数据改变重新统计数据数量和当前页
        this.currentPage = 1;
        this.totalItems = this.filterTableDataEnd.length;
        //渲染表格,根据值
        this.currentChangePage(this.filterTableDataEnd);
        //页面初始化数据需要判断是否检索过
        this.flag = true;
        this.tableDataName = "";
      },

      //监听pagesize改变的事件
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        this.handleCurrentChange(this.currentPage);
      },
      //监听页码值改变的事件
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
        //需要判断是否检索
        this.currentChangePage(this.tableDataBegin);
        // if (!this.flag) {
        //tableDataBegin不能写成tableDataEnd，不然在没有进行搜索功能的时候，不能进行分页操作，数据丢失
        this.currentChangePage(this.tableDataBegin);
        // } else {
        //   this.currentChangePage(this.filterTableDataEnd);
        // }
      }, //组件自带监控当前页码
      currentChangePage(list) {
        let from = (this.currentPage - 1) * this.pageSize;
        let to = this.currentPage * this.pageSize;
        this.tableDataEnd = [];
        for (; from < to; from++) {
          if (list[from]) {
            this.tableDataEnd.push(list[from]);
          }
        }
      },
      //取消搜索
      toggleSelection() {
        //直接重新加载界面，但是这样会出现一个问题：原先添加的元素消失了
        // this.reload()
        this.totalItems = this.tableDataBegin.length;
        if (this.totalItems > this.pageSize) {
          this.tableDataEnd = [];
          for (let index = 0; index < this.pageSize; index++) {
            this.tableDataEnd.push(this.tableDataBegin[index]);
          }
        } else {
          this.tableDataEnd = this.tableDataBegin;
        }
      },
      // 监听添加用户对话框的关闭事件
      resetForm() {
        // this.addForm={}
        this.$refs.addForm.resetFields();
      },
      //展示编辑信息的对话框
      showEditDialog(id, name, num, seq, type, creatTime, person, phone, alarmTime, enterprise, lastModifyTime,
        lastModifyPerson, state) {
        // console.log(id, name, num, seq, type, creatTime, person, phone, alarmTime, enterprise, lastModifyTime, lastModifyPerson, state)
        this.editForm = {
          id,
          name,
          num,
          seq,
          type,
          creatTime,
          person,
          phone,
          alarmTime,
          enterprise,
          lastModifyTime,
          lastModifyPerson,
          state
        }
        this.editDialogVisible = true;
      },
      editDialogClosed() {
        this.$refs.editForm.resetFields()
      },

      // 每次打开对话框根据状态改变进度条
      change() {
        const _this = this;
        let itemForm = JSON.parse(JSON.stringify(this.editForm));
        if (itemForm.state == "已通过") {
          this.activeIndex = 4
        }else if(itemForm.state == "已移交专家"){
          this.activeIndex = 2
        }else if(itemForm.state == "专家已回复"){
          this.activeIndex = 3
        }
      },

      pass() {

        this.$confirm('确认通过该流程吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'info'
          }).then(() => { this.$refs.editForm.validate(valid => {
            if (!valid) return;
            const _this = this;
            let itemForm = JSON.parse(JSON.stringify(this.editForm));
            console.log(itemForm)
            let keywords = itemForm.id;
            console.log(keywords)

            if (itemForm.state == "专家已回复") {
            // this.editDialogVisible = true;
            this.$message({
              type: 'error',
              message: '专家已回复无法修改流程!'
            });
          }else{
            this.tableDataBegin.forEach((value, index) => {
              if (value.id) {
                if (value.id == keywords) {
                  _this.tableDataBegin.splice(index, 1)
                  _this.$set(itemForm, 'state', "专家已回复")
                  this.activeIndex = 3
                  _this.$set(itemForm, 'lastModifyPerson', "专家人员")

                    var date = new Date()
                    var y = date.getFullYear();
                    var m = date.getMonth()+1;
                    m = m < 10 ? "0" + m : m;
                    var d = date.getDate();
                    var ho = date.getHours();
                    ho = ho < 10 ? "0" + ho : ho; // 如果只有一位，则前面补零
                    var mi = date.getMinutes();
                    mi = mi < 10 ? "0" + mi : mi; // 如果只有一位，则前面补零
                    var se = date.getSeconds();
                    se = se < 10 ? "0" + se : se; // 如果只有一位，则前面补零
                    var currentTime = y + "-" + m + '-' + d + ' ' + ho + ':' + mi + ':' + se
                    _this.$set(itemForm, "lastModifyTime", currentTime)
                }
              }
            });
            _this.tableDataBegin.push(itemForm)
            // console.log(_this.tableDataBegin);
            //隐藏添加用户的对话框
            this.editDialogVisible = true;
            this.$message({
              type: 'success',
              message: '提交成功!'
            });
            }
          });
          })
          .catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
      }
    }
  };
</script>

<style lang="less" scoped>
/**卡片的格式 */
.el-card {
  /* box-shadow: 0 1px 1px rgba(115, 171, 194, 0.15)!important; */
  background: #ffffff60;
  background: linear-gradient(to right bottom,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.3));
  border-radius: 25px;

}

.el-breadcrumb  /deep/  .el-breadcrumb__inner
      {
        color: rgb(96, 98, 102) !important;
    }
</style>
