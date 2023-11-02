import { Component } from '@angular/core';
import { GraphDataService } from 'src/app/services/graph-data/graph-data.service';

@Component({
  selector: 'app-graph-area',
  templateUrl: './graph-area.component.html',
  styleUrls: ['./graph-area.component.css'],
})
export class GraphAreaComponent {
  graph = {
    data: [] as Object[],
    layout: {
      polar: {
        radialaxis: {
          title: 'Score',
          visible: true,
          tickfont: {
            family: 'sans-serif',
            size: 14,
          },
        },
        angularaxis: {
          tickfont: {
            family: 'sans-serif',
            size: 14,
          },
        },
      },
      legend: {
        x: 0,
        y: 1.05,
      },
      showlegend: true,
      title: 'Student scores in each criteria',
    },
    config: {
      displaylogo: false,
      toImageButtonOptions: {
        filename: 'student-scores-radar-plot',
      },
    },
  };

  constructor(private graphDataService: GraphDataService) {
    graphDataService.selectedStudentsData$.subscribe((arr) => {
      this.graph.data = [];

      arr.forEach((student) => {
        this.graph.data.push({
          mode: 'markers+lines+text',
          type: 'scatterpolar',
          r: student.r,
          theta: student.theta,
          text: student.r,
          textposition: 'top center',
          textfont: {
            family: 'sans-serif',
            size: '14',
          },
          fill: 'toself',
          name: student.name,
          hovertemplate: 'Criteria: %{theta} <br>Score: %{r}',
        });
      });
    });
  }
}
