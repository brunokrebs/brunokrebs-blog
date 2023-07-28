import dynamic from 'next/dynamic';

const Plot = dynamic(
  () => import('react-plotly.js'),
  { ssr: false }
)

export type BigOTimeComplexity = 'bigONotation1' | 'bigONotationLogN' | 'bigONotationN' | 'bigONotationNLogN' | 'bigONotationNSquare' | 'bigONotation2PowerN' | 'bigONotationNFactorial';

export type BigOProps = {
  timeComplexitiesShown: BigOTimeComplexity[];
}

export const BigO = ({ timeComplexitiesShown }: BigOProps) => {
  const inputSize = [];

  const timeComplexities: { [key in BigOTimeComplexity]?: any } = {};

  for (let inputSizeSample = 1; inputSizeSample <= 20; inputSizeSample += 1) {
    inputSize.push(inputSizeSample);
  }

  // O(1)
  timeComplexities.bigONotation1 = {
    x: inputSize,
    y: inputSize.map(() => 1),
    mode: 'lines',
    name: 'O(1)'
  };

  // O(log n)
  timeComplexities.bigONotationLogN = {
    x: inputSize,
    y: inputSize.map((num) => Math.log2(num)),
    mode: 'lines',
    name: 'O(log n)'
  };

  // O(n)
  timeComplexities.bigONotationN = {
    x: inputSize,
    y: inputSize,
    mode: 'lines',
    name: 'O(n)'
  };

  // O(n log n)
  timeComplexities.bigONotationNLogN = {
    x: inputSize,
    y: inputSize.map((num) => num * Math.log2(num)),
    mode: 'lines',
    name: 'O(n log n)'
  };

  // O(n^2)
  timeComplexities.bigONotationNSquare = {
    x: inputSize,
    y: inputSize.map((num) => Math.pow(num, 2)),
    mode: 'lines',
    name: 'O(n^2)'
  };

  // O(2^n)
  timeComplexities.bigONotation2PowerN = {
    x: inputSize,
    y: inputSize.map((num) => Math.pow(2, num)),
    mode: 'lines',
    name: 'O(2^n)'
  };

  // O(n!)
  const factorial = (num: number) => {
    let rval = 1;
    for (let i = 2; i <= num; i++)
      rval = rval * i;
    return rval;
  }
  timeComplexities.bigONotationNFactorial = {
    x: inputSize,
    y: inputSize.map((num) => factorial(num)),
    mode: 'lines',
    name: 'O(n!)'
  };

  const data = timeComplexitiesShown.map((timeComplexityShown) => timeComplexities[timeComplexityShown]);

  // layout
  const layout = {
    title: 'Time Complexity',
    xaxis: { title: 'Input Size (n)' },
    yaxis: { title: 'Time', autorange: true }
  } as any;

  // render
  return (
    <Plot
      data={data}
      layout={layout}
    />
  );
};

export default BigO;

