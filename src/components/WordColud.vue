<template>
  <div>
    <div class="tooltip" ref="tooltip" />
    <div ref="node" />
  </div>
</template>

<script>
import * as d3 from 'd3';
import cloud from 'd3.layout.cloud-browserify';
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
    cb: Function,
    range: {
      type: Array,
      default: () => [25, 75, 280],
    },
  },
  methods: {
    renderChart() {
      // 节点
      const node = this.$refs.node;
      const tooltip = d3.select(this.$refs.tooltip);
      // 清除旧数据
      d3.select(node)
        .select('svg')
        .remove();

      const max = d3.max(this.data, d => d.size);
      // 比例总值
      const dataTotalSize = this.data && this.data.reduce((a, d) => a + d.size, 0);
      //占比比例尺
      const ProportionScale = d3
        .scaleLinear()
        .domain([0, dataTotalSize])
        .range([0, 100]);

      const fontWeightScale = d3
        .scaleLinear()
        .domain([0, max])
        .range([0, 1000]);

      //比例尺
      const linear = d3
        .scaleLinear()
        .domain([0, max])
        .range(this.range);

      // 颜色比例尺 固定色
      const color = d3.scaleSequential(d3.interpolateBlues);

      // 手动设置渐变色
      const a = d3.rgb(0, 255, 255);
      const b = d3.rgb(0, 0, 255);
      // 渐变色范围
      const compute = d3.interpolate(a, b);
      //渐变色比例尺
      const colorScale = d3
        .scaleLinear()
        .domain([0, this.data.length])
        .range([1, 0]);
      const color2 = d3.scaleSequential(compute);

      const draw = words => {
        d3.select(node)
          .append('svg')
          .attr('preserveAspectRatio', 'xMinYMin meet')
          .attr('viewBox', '0 0 ' + layout.size()[0] + ' ' + layout.size()[1])
          .style('width', '100%')
          .style('height', 'auto')
          .append('g')
          .attr('transform', 'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')')
          .selectAll('text')
          .data(words)
          .enter()
          .append('text')
          .style('font-size', d => d.size + 'px')
          .style('font-weight', d => d.weight)
          .style('font-family', 'Impact, YaHei')
          .style('fill', (d, i) => color(colorScale(i)))
          .attr('text-anchor', 'middle')
          .attr('transform', d => 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')')
          .text(d => d.text)
          // 添加事件
          .on('click', (...arg) => {
            this.cb && this.cb(d3.event, ...arg);
          })
          .on('mouseover', (d, i) => {
            const findDataByText = this.data.find(v => v.text === d.text);
            const proportion = ProportionScale(findDataByText.size);
            tooltip
              .html(
                `
            <h2>${d.text}</h2>
            第 ${Number(i + 1)}
            比重 ${proportion.toFixed(2)} %
            `
              )
              .style('left', d3.event.clientX + 16 + 'px')
              .style('top', d3.event.clientY + 16 + 'px')
              .style('opacity', 0.8);
          })
          .on('mousemove', d => {
            tooltip
              .style('left', d3.event.clientX + 16 + 'px')
              .style('top', d3.event.clientY + 16 + 'px');
          })
          .on('mouseout', d => {
            tooltip.style('opacity', 0);
          });
      };
      // 渲染词云
      const layout = cloud()
        .size([800, 600])
        .words(this.data.map(d => ({ text: d.text, size: d.size })))
        .rotate(() => ~~(Math.random() * 2) * 90)
        .font('Impact, YaHei')
        .fontSize(d => linear(d.size))
        .fontWeight(d => fontWeightScale(d.size))
        .on('end', draw);

      layout.start();
    },
  },
  watch: {
    data: {
      handler(nv, ov) {
        this.renderChart();
      },
    },
  },
};
</script>

<style lang='less' scoped>
.tooltip {
  position: fixed;
  width: 120px;
  height: auto;
  font-family: yaHei;
  font-size: 14px;
  text-align: center;
  background-color: #eee;
  border-radius: 3px;
  opacity: 0;
}
</style>

