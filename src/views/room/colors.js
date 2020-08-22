const colors = [
    {
        id: 'red-50',
        title: 'Red 50',
        hex: '#ffebee',
    },
    {
        id: 'red-100',
        title: 'Red 100',
        hex: '#ffcdd2',
    },
    {
        id: 'red-200',
        title: 'Red 200',
        hex: '#ef9a9a',
    },
    {
        id: 'red-300',
        title: 'Red 300',
        hex: '#e57373',
    },
    {
        id: 'red-400',
        title: 'Red 400',
        hex: '#ef5350',
    },
    {
        id: 'red-500',
        title: 'Red 500',
        hex: '#f44336',
    },
    {
        id: 'red-600',
        title: 'Red 600',
        hex: '#e53935',
    },
    {
        id: 'red-700',
        title: 'Red 700',
        hex: '#d32f2f',
    },
    {
        id: 'red-800',
        title: 'Red 800',
        hex: '#c62828',
    },
    {
        id: 'red-900',
        title: 'Red 900',
        hex: '#b71c1c',
    },
    {
        id: 'red-a100',
        title: 'Red a100',
        hex: '#ff8a80',
    },
    {
        id: 'red-a200',
        title: 'Red a200',
        hex: '#ff5252',
    },
    {
        id: 'red-a400',
        title: 'Red a400',
        hex: '#ff1744',
    },
    {
        id: 'red-a700',
        title: 'Red a700',
        hex: '#d50000',
    },
    {
        id: 'pink-50',
        title: 'Pink 50',
        hex: '#fce4ec',
    },
    {
        id: 'pink-100',
        title: 'Pink 100',
        hex: '#f8bbd0',
    },
    {
        id: 'pink-200',
        title: 'Pink 200',
        hex: '#f48fb1',
    },
    {
        id: 'pink-300',
        title: 'Pink 300',
        hex: '#f06292',
    },
    {
        id: 'pink-400',
        title: 'Pink 400',
        hex: '#ec407a',
    },
    {
        id: 'pink-500',
        title: 'Pink 500',
        hex: '#e91e63',
    },
    {
        id: 'pink-600',
        title: 'Pink 600',
        hex: '#d81b60',
    },
    {
        id: 'pink-700',
        title: 'Pink 700',
        hex: '#c2185b',
    },
    {
        id: 'pink-800',
        title: 'Pink 800',
        hex: '#ad1457',
    },
    {
        id: 'pink-900',
        title: 'Pink 900',
        hex: '#880e4f',
    },
    {
        id: 'pink-a100',
        title: 'Pink a100',
        hex: '#ff80ab',
    },
    {
        id: 'pink-a200',
        title: 'Pink a200',
        hex: '#ff4081',
    },
    {
        id: 'pink-a400',
        title: 'Pink a400',
        hex: '#f50057',
    },
    {
        id: 'pink-a700',
        title: 'Pink a700',
        hex: '#c51162',
    },
    {
        id: 'purple-50',
        title: 'Purple 50',
        hex: '#f3e5f5',
    },
    {
        id: 'purple-100',
        title: 'Purple 100',
        hex: '#e1bee7',
    },
    {
        id: 'purple-200',
        title: 'Purple 200',
        hex: '#ce93d8',
    },
    {
        id: 'purple-300',
        title: 'Purple 300',
        hex: '#ba68c8',
    },
    {
        id: 'purple-400',
        title: 'Purple 400',
        hex: '#ab47bc',
    },
    {
        id: 'purple-500',
        title: 'Purple 500',
        hex: '#9c27b0',
    },
    {
        id: 'purple-600',
        title: 'Purple 600',
        hex: '#8e24aa',
    },
    {
        id: 'purple-700',
        title: 'Purple 700',
        hex: '#7b1fa2',
    },
    {
        id: 'purple-800',
        title: 'Purple 800',
        hex: '#6a1b9a',
    },
    {
        id: 'purple-900',
        title: 'Purple 900',
        hex: '#4a148c',
    },
    {
        id: 'purple-a100',
        title: 'Purple a100',
        hex: '#ea80fc',
    },
    {
        id: 'purple-a200',
        title: 'Purple a200',
        hex: '#e040fb',
    },
    {
        id: 'purple-a400',
        title: 'Purple a400',
        hex: '#d500f9',
    },
    {
        id: 'purple-a700',
        title: 'Purple a700',
        hex: '#aa00ff',
    },
    {
        id: 'deeppurple-50',
        title: 'Deep Purple 50',
        hex: '#ede7f6',
    },
    {
        id: 'deeppurple-100',
        title: 'Deep Purple 100',
        hex: '#d1c4e9',
    },
    {
        id: 'deeppurple-200',
        title: 'Deep Purple 200',
        hex: '#b39ddb',
    },
    {
        id: 'deeppurple-300',
        title: 'Deep Purple 300',
        hex: '#9575cd',
    },
    {
        id: 'deeppurple-400',
        title: 'Deep Purple 400',
        hex: '#7e57c2',
    },
    {
        id: 'deeppurple-500',
        title: 'Deep Purple 500',
        hex: '#673ab7',
    },
    {
        id: 'deeppurple-600',
        title: 'Deep Purple 600',
        hex: '#5e35b1',
    },
    {
        id: 'deeppurple-700',
        title: 'Deep Purple 700',
        hex: '#512da8',
    },
    {
        id: 'deeppurple-800',
        title: 'Deep Purple 800',
        hex: '#4527a0',
    },
    {
        id: 'deeppurple-900',
        title: 'Deep Purple 900',
        hex: '#311b92',
    },
    {
        id: 'deeppurple-a100',
        title: 'Deep Purple a100',
        hex: '#b388ff',
    },
    {
        id: 'deeppurple-a200',
        title: 'Deep Purple a200',
        hex: '#7c4dff',
    },
    {
        id: 'deeppurple-a400',
        title: 'Deep Purple a400',
        hex: '#651fff',
    },
    {
        id: 'deeppurple-a700',
        title: 'Deep Purple a700',
        hex: '#6200ea',
    },
    {
        id: 'indigo-50',
        title: 'Indigo 50',
        hex: '#e8eaf6',
    },
    {
        id: 'indigo-100',
        title: 'Indigo 100',
        hex: '#c5cae9',
    },
    {
        id: 'indigo-200',
        title: 'Indigo 200',
        hex: '#9fa8da',
    },
    {
        id: 'indigo-300',
        title: 'Indigo 300',
        hex: '#7986cb',
    },
    {
        id: 'indigo-400',
        title: 'Indigo 400',
        hex: '#5c6bc0',
    },
    {
        id: 'indigo-500',
        title: 'Indigo 500',
        hex: '#3f51b5',
    },
    {
        id: 'indigo-600',
        title: 'Indigo 600',
        hex: '#3949ab',
    },
    {
        id: 'indigo-700',
        title: 'Indigo 700',
        hex: '#303f9f',
    },
    {
        id: 'indigo-800',
        title: 'Indigo 800',
        hex: '#283593',
    },
    {
        id: 'indigo-900',
        title: 'Indigo 900',
        hex: '#1a237e',
    },
    {
        id: 'indigo-a100',
        title: 'Indigo a100',
        hex: '#8c9eff',
    },
    {
        id: 'indigo-a200',
        title: 'Indigo a200',
        hex: '#536dfe',
    },
    {
        id: 'indigo-a400',
        title: 'Indigo a400',
        hex: '#3d5afe',
    },
    {
        id: 'indigo-a700',
        title: 'Indigo a700',
        hex: '#304ffe',
    },
    {
        id: 'blue-50',
        title: 'Blue 50',
        hex: '#e3f2fd',
    },
    {
        id: 'blue-100',
        title: 'Blue 100',
        hex: '#bbdefb',
    },
    {
        id: 'blue-200',
        title: 'Blue 200',
        hex: '#90caf9',
    },
    {
        id: 'blue-300',
        title: 'Blue 300',
        hex: '#64b5f6',
    },
    {
        id: 'blue-400',
        title: 'Blue 400',
        hex: '#42a5f5',
    },
    {
        id: 'blue-500',
        title: 'Blue 500',
        hex: '#2196f3',
    },
    {
        id: 'blue-600',
        title: 'Blue 600',
        hex: '#1e88e5',
    },
    {
        id: 'blue-700',
        title: 'Blue 700',
        hex: '#1976d2',
    },
    {
        id: 'blue-800',
        title: 'Blue 800',
        hex: '#1565c0',
    },
    {
        id: 'blue-900',
        title: 'Blue 900',
        hex: '#0d47a1',
    },
    {
        id: 'blue-a100',
        title: 'Blue a100',
        hex: '#82b1ff',
    },
    {
        id: 'blue-a200',
        title: 'Blue a200',
        hex: '#448aff',
    },
    {
        id: 'blue-a400',
        title: 'Blue a400',
        hex: '#2979ff',
    },
    {
        id: 'blue-a700',
        title: 'Blue a700',
        hex: '#2962ff',
    },
    {
        id: 'lightblue-50',
        title: 'Light Blue 50',
        hex: '#e1f5fe',
    },
    {
        id: 'lightblue-100',
        title: 'Light Blue 100',
        hex: '#b3e5fc',
    },
    {
        id: 'lightblue-200',
        title: 'Light Blue 200',
        hex: '#81d4fa',
    },
    {
        id: 'lightblue-300',
        title: 'Light Blue 300',
        hex: '#4fc3f7',
    },
    {
        id: 'lightblue-400',
        title: 'Light Blue 400',
        hex: '#29b6f6',
    },
    {
        id: 'lightblue-500',
        title: 'Light Blue 500',
        hex: '#03a9f4',
    },
    {
        id: 'lightblue-600',
        title: 'Light Blue 600',
        hex: '#039be5',
    },
    {
        id: 'lightblue-700',
        title: 'Light Blue 700',
        hex: '#0288d1',
    },
    {
        id: 'lightblue-800',
        title: 'Light Blue 800',
        hex: '#0277bd',
    },
    {
        id: 'lightblue-900',
        title: 'Light Blue 900',
        hex: '#01579b',
    },
    {
        id: 'lightblue-a100',
        title: 'Light Blue a100',
        hex: '#80d8ff',
    },
    {
        id: 'lightblue-a200',
        title: 'Light Blue a200',
        hex: '#40c4ff',
    },
    {
        id: 'lightblue-a400',
        title: 'Light Blue a400',
        hex: '#00b0ff',
    },
    {
        id: 'lightblue-a700',
        title: 'Light Blue a700',
        hex: '#0091ea',
    },
    {
        id: 'cyan-50',
        title: 'Cyan 50',
        hex: '#e0f7fa',
    },
    {
        id: 'cyan-100',
        title: 'Cyan 100',
        hex: '#b2ebf2',
    },
    {
        id: 'cyan-200',
        title: 'Cyan 200',
        hex: '#80deea',
    },
    {
        id: 'cyan-300',
        title: 'Cyan 300',
        hex: '#4dd0e1',
    },
    {
        id: 'cyan-400',
        title: 'Cyan 400',
        hex: '#26c6da',
    },
    {
        id: 'cyan-500',
        title: 'Cyan 500',
        hex: '#00bcd4',
    },
    {
        id: 'cyan-600',
        title: 'Cyan 600',
        hex: '#00acc1',
    },
    {
        id: 'cyan-700',
        title: 'Cyan 700',
        hex: '#0097a7',
    },
    {
        id: 'cyan-800',
        title: 'Cyan 800',
        hex: '#00838f',
    },
    {
        id: 'cyan-900',
        title: 'Cyan 900',
        hex: '#006064',
    },
    {
        id: 'cyan-a100',
        title: 'Cyan a100',
        hex: '#84ffff',
    },
    {
        id: 'cyan-a200',
        title: 'Cyan a200',
        hex: '#18ffff',
    },
    {
        id: 'cyan-a400',
        title: 'Cyan a400',
        hex: '#00e5ff',
    },
    {
        id: 'cyan-a700',
        title: 'Cyan a700',
        hex: '#00b8d4',
    },
    {
        id: 'teal-50',
        title: 'Teal 50',
        hex: '#e0f2f1',
    },
    {
        id: 'teal-100',
        title: 'Teal 100',
        hex: '#b2dfdb',
    },
    {
        id: 'teal-200',
        title: 'Teal 200',
        hex: '#80cbc4',
    },
    {
        id: 'teal-300',
        title: 'Teal 300',
        hex: '#4db6ac',
    },
    {
        id: 'teal-400',
        title: 'Teal 400',
        hex: '#26a69a',
    },
    {
        id: 'teal-500',
        title: 'Teal 500',
        hex: '#009688',
    },
    {
        id: 'teal-600',
        title: 'Teal 600',
        hex: '#00897b',
    },
    {
        id: 'teal-700',
        title: 'Teal 700',
        hex: '#00796b',
    },
    {
        id: 'teal-800',
        title: 'Teal 800',
        hex: '#00695c',
    },
    {
        id: 'teal-900',
        title: 'Teal 900',
        hex: '#004d40',
    },
    {
        id: 'teal-a100',
        title: 'Teal a100',
        hex: '#a7ffeb',
    },
    {
        id: 'teal-a200',
        title: 'Teal a200',
        hex: '#64ffda',
    },
    {
        id: 'teal-a400',
        title: 'Teal a400',
        hex: '#1de9b6',
    },
    {
        id: 'teal-a700',
        title: 'Teal a700',
        hex: '#00bfa5',
    },
    {
        id: 'green-50',
        title: 'Green 50',
        hex: '#e8f5e9',
    },
    {
        id: 'green-100',
        title: 'Green 100',
        hex: '#c8e6c9',
    },
    {
        id: 'green-200',
        title: 'Green 200',
        hex: '#a5d6a7',
    },
    {
        id: 'green-300',
        title: 'Green 300',
        hex: '#81c784',
    },
    {
        id: 'green-400',
        title: 'Green 400',
        hex: '#66bb6a',
    },
    {
        id: 'green-500',
        title: 'Green 500',
        hex: '#4caf50',
    },
    {
        id: 'green-600',
        title: 'Green 600',
        hex: '#43a047',
    },
    {
        id: 'green-700',
        title: 'Green 700',
        hex: '#388e3c',
    },
    {
        id: 'green-800',
        title: 'Green 800',
        hex: '#2e7d32',
    },
    {
        id: 'green-900',
        title: 'Green 900',
        hex: '#1b5e20',
    },
    {
        id: 'green-a100',
        title: 'Green a100',
        hex: '#b9f6ca',
    },
    {
        id: 'green-a200',
        title: 'Green a200',
        hex: '#69f0ae',
    },
    {
        id: 'green-a400',
        title: 'Green a400',
        hex: '#00e676',
    },
    {
        id: 'green-a700',
        title: 'Green a700',
        hex: '#00c853',
    },
    {
        id: 'lightgreen-50',
        title: 'Light Green 50',
        hex: '#f1f8e9',
    },
    {
        id: 'lightgreen-100',
        title: 'Light Green 100',
        hex: '#dcedc8',
    },
    {
        id: 'lightgreen-200',
        title: 'Light Green 200',
        hex: '#c5e1a5',
    },
    {
        id: 'lightgreen-300',
        title: 'Light Green 300',
        hex: '#aed581',
    },
    {
        id: 'lightgreen-400',
        title: 'Light Green 400',
        hex: '#9ccc65',
    },
    {
        id: 'lightgreen-500',
        title: 'Light Green 500',
        hex: '#8bc34a',
    },
    {
        id: 'lightgreen-600',
        title: 'Light Green 600',
        hex: '#7cb342',
    },
    {
        id: 'lightgreen-700',
        title: 'Light Green 700',
        hex: '#689f38',
    },
    {
        id: 'lightgreen-800',
        title: 'Light Green 800',
        hex: '#558b2f',
    },
    {
        id: 'lightgreen-900',
        title: 'Light Green 900',
        hex: '#33691e',
    },
    {
        id: 'lightgreen-a100',
        title: 'Light Green a100',
        hex: '#ccff90',
    },
    {
        id: 'lightgreen-a200',
        title: 'Light Green a200',
        hex: '#b2ff59',
    },
    {
        id: 'lightgreen-a400',
        title: 'Light Green a400',
        hex: '#76ff03',
    },
    {
        id: 'lightgreen-a700',
        title: 'Light Green a700',
        hex: '#64dd17',
    },
    {
        id: 'lime-50',
        title: 'Lime 50',
        hex: '#f9fbe7',
    },
    {
        id: 'lime-100',
        title: 'Lime 100',
        hex: '#f0f4c3',
    },
    {
        id: 'lime-200',
        title: 'Lime 200',
        hex: '#e6ee9c',
    },
    {
        id: 'lime-300',
        title: 'Lime 300',
        hex: '#dce775',
    },
    {
        id: 'lime-400',
        title: 'Lime 400',
        hex: '#d4e157',
    },
    {
        id: 'lime-500',
        title: 'Lime 500',
        hex: '#cddc39',
    },
    {
        id: 'lime-600',
        title: 'Lime 600',
        hex: '#c0ca33',
    },
    {
        id: 'lime-700',
        title: 'Lime 700',
        hex: '#afb42b',
    },
    {
        id: 'lime-800',
        title: 'Lime 800',
        hex: '#9e9d24',
    },
    {
        id: 'lime-900',
        title: 'Lime 900',
        hex: '#827717',
    },
    {
        id: 'lime-a100',
        title: 'Lime a100',
        hex: '#f4ff81',
    },
    {
        id: 'lime-a200',
        title: 'Lime a200',
        hex: '#eeff41',
    },
    {
        id: 'lime-a400',
        title: 'Lime a400',
        hex: '#c6ff00',
    },
    {
        id: 'lime-a700',
        title: 'Lime a700',
        hex: '#aeea00',
    },
    {
        id: 'yellow-50',
        title: 'Yellow 50',
        hex: '#fffde7',
    },
    {
        id: 'yellow-100',
        title: 'Yellow 100',
        hex: '#fff9c4',
    },
    {
        id: 'yellow-200',
        title: 'Yellow 200',
        hex: '#fff59d',
    },
    {
        id: 'yellow-300',
        title: 'Yellow 300',
        hex: '#fff176',
    },
    {
        id: 'yellow-400',
        title: 'Yellow 400',
        hex: '#ffee58',
    },
    {
        id: 'yellow-500',
        title: 'Yellow 500',
        hex: '#ffeb3b',
    },
    {
        id: 'yellow-600',
        title: 'Yellow 600',
        hex: '#fdd835',
    },
    {
        id: 'yellow-700',
        title: 'Yellow 700',
        hex: '#fbc02d',
    },
    {
        id: 'yellow-800',
        title: 'Yellow 800',
        hex: '#f9a825',
    },
    {
        id: 'yellow-900',
        title: 'Yellow 900',
        hex: '#f57f17',
    },
    {
        id: 'yellow-a100',
        title: 'Yellow a100',
        hex: '#ffff8d',
    },
    {
        id: 'yellow-a200',
        title: 'Yellow a200',
        hex: '#ffff00',
    },
    {
        id: 'yellow-a400',
        title: 'Yellow a400',
        hex: '#ffea00',
    },
    {
        id: 'yellow-a700',
        title: 'Yellow a700',
        hex: '#ffd600',
    },
    {
        id: 'amber-50',
        title: 'Amber 50',
        hex: '#fff8e1',
    },
    {
        id: 'amber-100',
        title: 'Amber 100',
        hex: '#ffecb3',
    },
    {
        id: 'amber-200',
        title: 'Amber 200',
        hex: '#ffe082',
    },
    {
        id: 'amber-300',
        title: 'Amber 300',
        hex: '#ffd54f',
    },
    {
        id: 'amber-400',
        title: 'Amber 400',
        hex: '#ffca28',
    },
    {
        id: 'amber-500',
        title: 'Amber 500',
        hex: '#ffc107',
    },
    {
        id: 'amber-600',
        title: 'Amber 600',
        hex: '#ffb300',
    },
    {
        id: 'amber-700',
        title: 'Amber 700',
        hex: '#ffa000',
    },
    {
        id: 'amber-800',
        title: 'Amber 800',
        hex: '#ff8f00',
    },
    {
        id: 'amber-900',
        title: 'Amber 900',
        hex: '#ff6f00',
    },
    {
        id: 'amber-a100',
        title: 'Amber a100',
        hex: '#ffe57f',
    },
    {
        id: 'amber-a200',
        title: 'Amber a200',
        hex: '#ffd740',
    },
    {
        id: 'amber-a400',
        title: 'Amber a400',
        hex: '#ffc400',
    },
    {
        id: 'amber-a700',
        title: 'Amber a700',
        hex: '#ffab00',
    },
    {
        id: 'orange-50',
        title: 'Orange 50',
        hex: '#fff3e0',
    },
    {
        id: 'orange-100',
        title: 'Orange 100',
        hex: '#ffe0b2',
    },
    {
        id: 'orange-200',
        title: 'Orange 200',
        hex: '#ffcc80',
    },
    {
        id: 'orange-300',
        title: 'Orange 300',
        hex: '#ffb74d',
    },
    {
        id: 'orange-400',
        title: 'Orange 400',
        hex: '#ffa726',
    },
    {
        id: 'orange-500',
        title: 'Orange 500',
        hex: '#ff9800',
    },
    {
        id: 'orange-600',
        title: 'Orange 600',
        hex: '#fb8c00',
    },
    {
        id: 'orange-700',
        title: 'Orange 700',
        hex: '#f57c00',
    },
    {
        id: 'orange-800',
        title: 'Orange 800',
        hex: '#ef6c00',
    },
    {
        id: 'orange-900',
        title: 'Orange 900',
        hex: '#e65100',
    },
    {
        id: 'orange-a100',
        title: 'Orange a100',
        hex: '#ffd180',
    },
    {
        id: 'orange-a200',
        title: 'Orange a200',
        hex: '#ffab40',
    },
    {
        id: 'orange-a400',
        title: 'Orange a400',
        hex: '#ff9100',
    },
    {
        id: 'orange-a700',
        title: 'Orange a700',
        hex: '#ff6d00',
    },
    {
        id: 'deeporange-50',
        title: 'Deep Orange 50',
        hex: '#fbe9e7',
    },
    {
        id: 'deeporange-100',
        title: 'Deep Orange 100',
        hex: '#ffccbc',
    },
    {
        id: 'deeporange-200',
        title: 'Deep Orange 200',
        hex: '#ffab91',
    },
    {
        id: 'deeporange-300',
        title: 'Deep Orange 300',
        hex: '#ff8a65',
    },
    {
        id: 'deeporange-400',
        title: 'Deep Orange 400',
        hex: '#ff7043',
    },
    {
        id: 'deeporange-500',
        title: 'Deep Orange 500',
        hex: '#ff5722',
    },
    {
        id: 'deeporange-600',
        title: 'Deep Orange 600',
        hex: '#f4511e',
    },
    {
        id: 'deeporange-700',
        title: 'Deep Orange 700',
        hex: '#e64a19',
    },
    {
        id: 'deeporange-800',
        title: 'Deep Orange 800',
        hex: '#d84315',
    },
    {
        id: 'deeporange-900',
        title: 'Deep Orange 900',
        hex: '#bf360c',
    },
    {
        id: 'deeporange-a100',
        title: 'Deep Orange a100',
        hex: '#ff9e80',
    },
    {
        id: 'deeporange-a200',
        title: 'Deep Orange a200',
        hex: '#ff6e40',
    },
    {
        id: 'deeporange-a400',
        title: 'Deep Orange a400',
        hex: '#ff3d00',
    },
    {
        id: 'deeporange-a700',
        title: 'Deep Orange a700',
        hex: '#dd2c00',
    },
    {
        id: 'brown-50',
        title: 'Brown 50',
        hex: '#efebe9',
    },
    {
        id: 'brown-100',
        title: 'Brown 100',
        hex: '#d7ccc8',
    },
    {
        id: 'brown-200',
        title: 'Brown 200',
        hex: '#bcaaa4',
    },
    {
        id: 'brown-300',
        title: 'Brown 300',
        hex: '#a1887f',
    },
    {
        id: 'brown-400',
        title: 'Brown 400',
        hex: '#8d6e63',
    },
    {
        id: 'brown-500',
        title: 'Brown 500',
        hex: '#795548',
    },
    {
        id: 'brown-600',
        title: 'Brown 600',
        hex: '#6d4c41',
    },
    {
        id: 'brown-700',
        title: 'Brown 700',
        hex: '#5d4037',
    },
    {
        id: 'brown-800',
        title: 'Brown 800',
        hex: '#4e342e',
    },
    {
        id: 'brown-900',
        title: 'Brown 900',
        hex: '#3e2723',
    },
    {
        id: 'grey-50',
        title: 'Grey 50',
        hex: '#fafafa',
    },
    {
        id: 'grey-100',
        title: 'Grey 100',
        hex: '#f5f5f5',
    },
    {
        id: 'grey-200',
        title: 'Grey 200',
        hex: '#eeeeee',
    },
    {
        id: 'grey-300',
        title: 'Grey 300',
        hex: '#e0e0e0',
    },
    {
        id: 'grey-400',
        title: 'Grey 400',
        hex: '#bdbdbd',
    },
    {
        id: 'grey-500',
        title: 'Grey 500',
        hex: '#9e9e9e',
    },
    {
        id: 'grey-600',
        title: 'Grey 600',
        hex: '#757575',
    },
    {
        id: 'grey-700',
        title: 'Grey 700',
        hex: '#616161',
    },
    {
        id: 'grey-800',
        title: 'Grey 800',
        hex: '#424242',
    },
    {
        id: 'grey-900',
        title: 'Grey 900',
        hex: '#212121',
    },
    {
        id: 'bluegrey-50',
        title: 'Blue Grey 50',
        hex: '#eceff1',
    },
    {
        id: 'bluegrey-100',
        title: 'Blue Grey 100',
        hex: '#cfd8dc',
    },
    {
        id: 'bluegrey-200',
        title: 'Blue Grey 200',
        hex: '#b0bec5',
    },
    {
        id: 'bluegrey-300',
        title: 'Blue Grey 300',
        hex: '#90a4ae',
    },
    {
        id: 'bluegrey-400',
        title: 'Blue Grey 400',
        hex: '#78909c',
    },
    {
        id: 'bluegrey-500',
        title: 'Blue Grey 500',
        hex: '#607d8b',
    },
    {
        id: 'bluegrey-600',
        title: 'Blue Grey 600',
        hex: '#546e7a',
    },
    {
        id: 'bluegrey-700',
        title: 'Blue Grey 700',
        hex: '#455a64',
    },
    {
        id: 'bluegrey-800',
        title: 'Blue Grey 800',
        hex: '#37474f',
    },
    {
        id: 'bluegrey-900',
        title: 'Blue Grey 900',
        hex: '#263238',
    },
]

export default colors
