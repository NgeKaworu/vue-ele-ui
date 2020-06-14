import s2v from '@/utils/s2v';
import { Input } from 'element-ui';
import Vue from 'vue';
export default {
  name: 'lab',
  data() {
    return {
      test: '',
    };
  },
  created() {
    console.log(s2v('Input'));
  },
  render(h) {
    const Comp = s2v('Input');
    return (
      <div class="lab">
        <Comp v-model={this.test} />
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
    );
  },
};
