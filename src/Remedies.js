import React from 'react';

const Remedies = ({ disease }) => {
  const getRemedies = (disease) => {
    switch (disease) {
      case 'Anthracnose':
        return [
          'Anthracnose is a fungal disease that affects mango leaves, fruit, and branches. The symptoms of anthracnose on mango leaves include brown or black lesions that start at the edge of the leaf andspread inward, causing the leaf to become discolored and distorted. In severe cases, the infectedleavesmay fall off. The fungus that causes anthracnose can survive in dead leaves and twigs on the groundandin infected fruit that remains on the tree, and it can spread to healthy tissue through splashing water or wind-blown spores. Here are some effective remedies to control anthracnose on mango leaves:',
          'Proper cultural practices: Maintain good sanitation practices, such as removing and disposingof infected leaves and fruit, to reduce the spread of the disease',
          'Pruning: Regular pruning of infected twigs and branches can help prevent the spread of thedisease',
          
        ];
      case 'Bacterial Canker':
        return [
          'Bacterial canker is a disease caused by the bacterium Xanthomonas campestris, which affects mangotrees. On the leaves, bacterial canker manifests as small, water-soaked spots that can enlarge andbecome necrotic (dead) over time. As the disease progresses, the infected leaves may yellowandfall off, and the tree may defoliate. Here are some effective remedies to control bacterial canker on mangoleaves:',
          'Sanitation: Maintaining good sanitation practices is key to preventing the spread of bacterial canker. Remove and dispose of infected leaves, twigs, and branches to reduce the spreadof thedisease.',
          'Pruning: Regular pruning of infected twigs and branches can help prevent the spread of thedisease. Make sure to sterilize pruning tools between cuts to avoid spreading the bacteria fromone plant to another.',
        ];
      case 'Gail Midge':
        return [
          'Gall midge is a pest that affects mango trees. It is a small, reddish-brown fly that lays its eggs on thenewgrowth of mango leaves. When the eggs hatch, the larvae feed on the leaf tissue, causing the formationof galls or raised, swollen areas on the leaves. These galls can cause the affected leaves to becomedistorted and curled, and in severe cases, the leaves may fall off. Here are some effective remedies tocontrol gall midge on mango leaves:',
          'Good cultural practices: Maintain good sanitation practices by removing and disposing of infected leaves and shoots to reduce the spread of the pest.',
          'Use of insecticides: Apply insecticides like pyrethroids, neonicotinoids, or spinosads to control the population of gall midge larvae. Always follow the label instructions for application rates andfrequencies.',
        ];
      case 'Healthy':
        return ['No specific remedies required this is a good leaves.'];
      case 'Powdery Mildew':
        return [
          'Powdery mildew is a fungal disease that affects mango leaves. The symptoms of powdery mildewonmango leaves include a white or gray powdery coating on the upper surface of the leaves. The infectedleaves may also become distorted or curled and may drop prematurely. In severe cases, the diseasecanspread to the fruit and twigs, causing further damage to the tree. Here are some effective remedies tocontrol powdery mildew on mango leaves',
          'Proper cultural practices: Maintain good sanitation practices, such as removing and disposingof infected leaves, to reduce the spread of the disease.',
          'Fungicide application: Apply a fungicide like sulfur or a neem-based product to control thespread of the disease. Always follow the label instructions for application rates and frequencies.',
        ];
      case 'Sooty Mould':
        return [
          'Sooty mold is a fungal growth that can appear on the leaves of mango trees. It is not a direct pathogenof the tree but is instead a secondary issue that arises due to the presence of sap-sucking insects, suchas aphids or scale insects. These insects feed on the sap of the mango tree and excrete a sticky, sugary substance called honeydew. Sooty mold grows on the honeydew, creating a dark, sooty-looking coatingon the leaves, fruit, and other parts of the tree. Sooty mold can reduce the trees photosynthetic abilityand, in severe cases, cause leaves to yellow and drop. Here are some effective remedies to control sootymold on mango leaves',
          'Control the insect pests: The first step in controlling sooty mold is to control the insect pests that are secreting the honeydew on which the mold grows. This can be done by applying insecticides like pyrethroids or neonicotinoids.',
          'Pruning: Pruning infected branches and leaves can help reduce the spread of the disease.',
        ];
      default:
        return [];
    }
  };

  const remedies = getRemedies(disease);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
        {remedies.map((remedy, index) => (
          <li key={index} style={{ marginBottom: '10px', color: 'white' }}>{remedy}</li>
        ))}
      </ul>
    </div>
  );
};

export default Remedies;
