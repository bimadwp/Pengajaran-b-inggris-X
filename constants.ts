
import { ProcedureText, QuizQuestion, GlossaryTerm, QuizType } from './types';

export const procedureTextExamples: ProcedureText[] = [
    {
        id: 'fried-rice',
        title: 'How to Make Fried Rice',
        type: 'How to make',
        imageUrl: 'https://picsum.photos/seed/friedrice/600/400',
        goal: 'This text explains how to cook a simple and delicious fried rice.',
        materials: [
            '2 plates of cooked white rice',
            '2 cloves of garlic, minced',
            '1 shallot, sliced',
            '1 egg, beaten',
            '1 tablespoon of soy sauce',
            'A pinch of salt and pepper',
            'Cooking oil'
        ],
        steps: [
            'First, heat the cooking oil in a pan.',
            'Then, sauté the minced garlic and sliced shallot until fragrant.',
            'Next, move the sautéed ingredients to the side of the pan and add the beaten egg. Scramble it.',
            'After that, add the cooked rice and mix well with all ingredients.',
            'Pour the soy sauce, and add salt and pepper. Stir until everything is evenly mixed.',
            'Finally, serve the fried rice on a plate. You can add toppings like fried egg or crackers.'
        ],
        translation: {
            title: 'Cara Membuat Nasi Goreng',
            goal: 'Teks ini menjelaskan cara memasak nasi goreng yang sederhana dan lezat.',
            materials: [
                '2 piring nasi putih',
                '2 siung bawang putih, cincang',
                '1 bawang merah, iris',
                '1 butir telur, kocok lepas',
                '1 sendok makan kecap manis',
                'Sejumput garam dan merica',
                'Minyak goreng'
            ],
            steps: [
                'Pertama, panaskan minyak goreng di wajan.',
                'Kemudian, tumis bawang putih cincang dan irisan bawang merah hingga harum.',
                'Selanjutnya, sisihkan tumisan ke pinggir wajan dan masukkan telur kocok. Buat orak-arik.',
                'Setelah itu, masukkan nasi dan aduk rata dengan semua bumbu.',
                'Tuangkan kecap manis, tambahkan garam dan merica. Aduk hingga semua tercampur rata.',
                'Terakhir, sajikan nasi goreng di atas piring. Anda bisa menambahkan topping seperti telur mata sapi atau kerupuk.'
            ]
        }
    },
    {
        id: 'blender',
        title: 'How to Use a Blender',
        type: 'How to use',
        imageUrl: 'https://picsum.photos/seed/blender/600/400',
        goal: 'Follow these steps to safely and effectively use a blender to make a smoothie.',
        materials: [
            'A clean blender jar, lid, and base',
            'Fruits (e.g., banana, berries)',
            'Liquid (e.g., milk, water, or yogurt)',
            'An electrical socket'
        ],
        steps: [
            'First, make sure the blender is unplugged and the jar is clean.',
            'Second, place the blender jar onto the base firmly.',
            'Next, add your ingredients into the jar. Start with the liquid, then add the fruits.',
            'Then, put the lid on the jar securely. Make sure it is closed tightly.',
            'After that, plug the blender into the electrical socket.',
            'Press the power button and select the desired speed. Blend until the mixture is smooth.',
            'Finally, turn off the blender, unplug it, and pour your smoothie into a glass.'
        ],
        translation: {
            title: 'Cara Menggunakan Blender',
            goal: 'Ikuti langkah-langkah ini untuk menggunakan blender dengan aman dan efektif untuk membuat smoothie.',
            materials: [
                'Tabung blender, tutup, dan dasar blender yang bersih',
                'Buah-buahan (misal: pisang, beri)',
                'Cairan (misal: susu, air, atau yogurt)',
                'Stopkontak listrik'
            ],
            steps: [
                'Pertama, pastikan blender tidak tercolok ke listrik dan tabungnya bersih.',
                'Kedua, letakkan tabung blender ke dasar blender dengan kencang.',
                'Selanjutnya, masukkan bahan-bahan ke dalam tabung. Mulai dengan cairan, lalu tambahkan buah-buahan.',
                'Kemudian, pasang tutup pada tabung dengan rapat. Pastikan tertutup kencang.',
                'Setelah itu, colokkan blender ke stopkontak.',
                'Tekan tombol daya dan pilih kecepatan yang diinginkan. Blender hingga campurannya halus.',
                'Terakhir, matikan blender, cabut stekernya, dan tuangkan smoothie Anda ke dalam gelas.'
            ]
        }
    },
    {
        id: 'library',
        title: 'How to Get to the Library from the Main Gate',
        type: 'How to get to',
        imageUrl: 'https://picsum.photos/seed/library/600/400',
        goal: 'This guide shows you the way to the school library from the main gate.',
        steps: [
            'First, enter through the main gate of the school.',
            'Then, walk straight along the main corridor for about 50 meters until you see the flagpole in the school yard.',
            'From the flagpole, turn left and walk past the teachers\' office.',
            'After you pass the teachers\' office, you will see a small garden on your right.',
            'The library is the large building right behind the garden.',
            'Finally, you will see the sign "LIBRARY" on the door. You have arrived.'
        ],
        translation: {
            title: 'Cara Menuju Perpustakaan dari Gerbang Utama',
            goal: 'Panduan ini menunjukkan jalan menuju perpustakaan sekolah dari gerbang utama.',
            steps: [
                'Pertama, masuk melalui gerbang utama sekolah.',
                'Kemudian, berjalan lurus di sepanjang koridor utama sekitar 50 meter hingga Anda melihat tiang bendera di lapangan sekolah.',
                'Dari tiang bendera, belok kiri dan lewati kantor guru.',
                'Setelah melewati kantor guru, Anda akan melihat taman kecil di sebelah kanan.',
                'Perpustakaan adalah gedung besar tepat di belakang taman itu.',
                'Terakhir, Anda akan melihat tulisan "PERPUSTAKAAN" di pintu. Anda telah tiba.'
            ]
        }
    }
];

export const quizQuestions: QuizQuestion[] = [
    {
        id: 'q1-mc',
        type: QuizType.MULTIPLE_CHOICE,
        question: 'What is the main purpose of a procedure text?',
        options: [
            'To entertain the reader with a story',
            'To describe how something is done in sequential steps',
            'To persuade the reader to buy a product',
            'To report on an event'
        ],
        correctAnswer: 'To describe how something is done in sequential steps'
    },
    {
        id: 'q2-mc',
        type: QuizType.MULTIPLE_CHOICE,
        question: 'Which part of a procedure text lists the things you need?',
        context: '"How to Make Fried Rice" text.',
        options: ['Goal', 'Steps', 'Materials', 'Conclusion'],
        correctAnswer: 'Materials'
    },
    {
        id: 'q3-mc',
        type: QuizType.MULTIPLE_CHOICE,
        question: 'What kind of verbs are commonly used in procedure texts?',
        options: ['Action Verbs (e.g., cut, mix, pour)', 'Linking Verbs (e.g., is, are, was)', 'Helping Verbs (e.g., can, will, must)', 'Past Tense Verbs (e.g., cooked, mixed, poured)'],
        correctAnswer: 'Action Verbs (e.g., cut, mix, pour)'
    },
    {
        id: 'q4-dnd',
        type: QuizType.DRAG_AND_DROP,
        title: 'Arrange the steps for using a blender in the correct order.',
        correctOrder: [
            'First, make sure the blender is unplugged and the jar is clean.',
            'Second, place the blender jar onto the base firmly.',
            'Next, add your ingredients into the jar. Start with the liquid, then add the fruits.',
            'Then, put the lid on the jar securely. Make sure it is closed tightly.',
            'After that, plug the blender into the electrical socket.',
            'Press the power button and select the desired speed. Blend until the mixture is smooth.',
            'Finally, turn off the blender, unplug it, and pour your smoothie into a glass.'
        ]
    },
    {
        id: 'q5-writing',
        type: QuizType.WRITING,
        title: 'Write a Procedure Text',
        imageUrl: 'https://picsum.photos/seed/coffee/600/400',
        prompt: 'Look at the image. Write a short procedure text on "How to Make a Cup of Instant Coffee". Include a goal, materials, and steps.',
        geminiPromptContext: 'how to make a cup of instant coffee'
    }
];

export const glossaryTerms: GlossaryTerm[] = [
    {
        term: 'Procedure Text',
        definition: 'A text that explains how something works or how to use instruction/operation manuals.',
        example: '"How to make a cup of tea" is an example of a procedure text.'
    },
    {
        term: 'Goal',
        definition: 'The purpose or aim of the procedure. It is usually stated in the title.',
        example: 'In "How to Use a Blender", the goal is to explain the steps of using a blender.'
    },
    {
        term: 'Materials',
        definition: 'The list of ingredients, tools, or equipment needed for the procedure.',
        example: 'For making fried rice, the materials include rice, garlic, and soy sauce.'
    },
    {
        term: 'Steps',
        definition: 'A series of actions or instructions that must be followed in a specific order.',
        example: '"First, heat the oil. Second, add the onions." are the first two steps.'
    },
    {
        term: 'Imperative Verb',
        definition: 'A verb that gives a command or instruction (e.g., cut, pour, add).',
        example: 'In the sentence "Mix the flour and sugar," the word "Mix" is an imperative verb.'
    },
    {
        term: 'Connector',
        definition: 'A word that connects steps in a sequence (e.g., first, then, next, finally).',
        example: '"First, boil the water. Then, add the coffee." The word "Then" is a connector.'
    },
];
