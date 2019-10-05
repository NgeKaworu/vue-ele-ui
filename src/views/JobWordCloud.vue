<script>
import { Select, Option } from 'element-ui';
import { mapActions, mapState } from 'vuex';
import WordCloud from '@/components/WordColud.vue';
export default {
  components: { Select, Option },
  data: () => ({
    current: undefined,
  }),
  created() {
    this.fetchAllTime();
  },
  computed: {
    ...mapState('job', {
      allTime: ({ allTime }) => allTime || [],
      wordCloud: ({ wordCloud }) => wordCloud || {},
    }),
    ...mapState('global', {
      loading: ({ loading }) => loading || false,
    }),
  },
  render(h) {
    return (
      <div>
        <Select
          loading={this.loading}
          value={this.current}
          filterable
          placeholder="请选择时间"
          onChange={e => {
            this.current = e;
            if (!this.wordCloud[e]) {
              this.fetchWordCloudWithTime(e);
            }
          }}
          // onVisible-change={e => console.log('123', e)}
        >
          {this.allTime.map(time => (
            <Option key={time.createTime} lable={time.createTime} value={time.createTime} />
          ))}
        </Select>
        <WordCloud
          data={(this.wordCloud[this.current] || []).map(({ word, count }) => ({
            text: word,
            size: count,
          }))}
        />
      </div>
    );
  },
  methods: {
    ...mapActions('job', {
      fetchAllTime: 'fetchAllTime',
      fetchWordCloudWithTime: 'fetchWordCloudWithTime',
    }),
  },
  components: { WordCloud, Select, Option },
};
</script>


