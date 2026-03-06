const MERLIN_EVAL_DATA = {
  cases: [
    {
      case_id: "BDMAP_00000547",
      pathology: "ovarian",
      nifti_url: "data/merlin_evals/BDMAP_00000547.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00000547_thumb.png",
      gt_report: "CHEST CT: Not performed.\n\nABDOMEN/PELVIS CT: \nThe spleen is normal in size, measuring 160.5 cc, and demonstrates homogeneous parenchymal enhancement with a mean HU value of 137.3 +/- 51.8.\n\nThe liver is normal in size, measuring 1088.5 cc, and shows normal uniform hepatic parenchymal enhancement with a mean HU value of 129.4 +/- 29.7. No suspicious focal enhancing or hypoenhancing lesions are identified on postcontrast scans. No evidence of intra or extrahepatic biliary dilatation is seen.\n\nThe pancreas is normal in size, measuring 64.2 cc, and demonstrates homogeneous parenchymal enhancement with a mean HU value of 100.4 +/- 32.9. No focal pancreatic calcifications are identified.\n\nThe kidneys are normal in size, with the right kidney measuring 170.5 cc and the left kidney measuring 180.1 cc. They demonstrate normal symmetrical cortical enhancement with a mean HU value of 152.0 +/- 65.6. No intrinsic solid hypervascular or hypoenhancing masses are identified.\n\nThe colon contains a large hyperattenuating mass, measuring 5.1 x 4.4 cm, with a volume of 36.7 cc. The mass has an HU value of 82.4 +/- 32.0, indicating hyperattenuation relative to the colon.\n\nNo abnormal-appearing or enlarged retroperitoneal, mesenteric, or iliofemoral lymph nodes are identified. No ascites or abnormal intra-abdominal fluid collections are seen.\n\nBONES: Not evaluated.\n\nIMPRESSION:\n1. A large hyperattenuating colon mass, measuring 5.1 x 4.4 cm, is identified.",
      pred_report: "lower thorax: mild dependent atelectasis. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: no evidence of bowel obstruction. the appendix is normal in appearance and air-filled, without surrounding inflammatory changes or periappendiceal fluid collection to suggest acute appendicitis. peritoneal cavity: no free fluid. abdominal wall: normal. bladder: normal. uterus and ovaries: the uterus is surgically absent with bilateral salpingo-oophorectomy. vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.0702, "BLEU-2": 0.0267, "BLEU-3": 0.0154, "BLEU-4": 0.0055, "ROUGE-1": 0.2553, "ROUGE-2": 0.0428, "ROUGE-L": 0.1398 },
      missed_findings: [
        "Large hyperattenuating colon mass (5.1 x 4.4 cm, HU 82.4) — Merlin says 'no bowel obstruction'"
      ],
      five_year: { "CVD": 0.606, "IHD": 0.585, "HTN": 0.620, "DM": 0.596, "CKD": 0.613, "CLD": 0.603 }
    },
    {
      case_id: "BDMAP_00003256",
      pathology: "ovarian",
      nifti_url: "data/merlin_evals/BDMAP_00003256.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00003256_thumb.png",
      gt_report: "The patient has undergone a CT scan of the abdomen, which included imaging of the spleen, liver, pancreas, and kidneys. The spleen has a mean Hounsfield Unit (HU) value of 134.1 +/- 50.0. The liver has a mean HU value of 64.9 +/- 15.0. The pancreas is of normal size, with a volume of 68.7 cc and a mean HU value of 105.2 +/- 45.2.\n\nThe kidneys are also of normal size, with the right kidney having a volume of 124.7 cc and the left kidney having a volume of 125.7 cc. The total kidney volume is 250.4 cc, with a mean HU value of 130.3 +/- 82.4. However, there are multiple lesions identified in the kidneys. \n\nThe liver and spleen appear unremarkable. The pancreas is normal in size and configuration with homogeneous parenchymal enhancement. No focal pancreatic calcifications are seen.\n\nThe kidneys have multiple hypoattenuating lesions. The largest lesion, located in the kidney, measures 4.6 x 3.4 cm (image 21) and has a volume of 32.8 cc. The other lesions are smaller, ranging in size from 0.3 x 0.3 cm to 1.3 x 1.1 cm. All of the lesions are hypoattenuating, with the exception of one lesion in the left kidney, which is isoattenuating.\n\nThe adrenal glands are symmetrical, normal in size and configuration. No adrenal masses are seen.\n\nNo free fluid or ascites is identified. No bowel obstruction or abnormal bowel wall thickening is seen.\n\nIMPRESSION:\nMultiple (6) kidney masses are identified, with the largest one measuring 4.6 x 3.4 cm. The total volume of all kidney masses is 33.8 cc.",
      pred_report: "lower thorax: mild bibasilar atelectasis. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: no evidence of bowel obstruction. the appendix is normal in caliber and air filled (4/230). peritoneal cavity: no free fluid. abdominal wall: normal. bladder: normal. uterus and ovaries: the uterus is surgically absent with bilateral salpingo-oophorectomy. vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.0311, "BLEU-2": 0.0150, "BLEU-3": 0.0082, "BLEU-4": 0.0029, "ROUGE-1": 0.2050, "ROUGE-2": 0.0613, "ROUGE-L": 0.1330 },
      missed_findings: [
        "Multiple (6) kidney masses, largest 4.6 x 3.4 cm (32.8 cc) — Merlin says 'kidneys: normal'",
        "Low liver HU (64.9) suggesting possible steatosis — not mentioned"
      ],
      five_year: { "CVD": 0.611, "IHD": 0.590, "HTN": 0.623, "DM": 0.604, "CKD": 0.620, "CLD": 0.600 }
    },
    {
      case_id: "BDMAP_00003432",
      pathology: "ovarian",
      nifti_url: "data/merlin_evals/BDMAP_00003432.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00003432_thumb.png",
      gt_report: "FINDINGS:\n\nCHEST: \nNo significant findings are noted in the chest.\n\nABDOMEN:\nABDOMINAL ORGANS (INCLUDING BILIARY TREE): \nThe liver is normal in size, with a volume of 1481.0 cc. However, there are multiple hypoattenuating liver lesions identified. The largest lesion, located in hepatic segment 1, measures 2.7 x 2.0 cm (image 100) with a volume of 5.5 cc. Three additional smaller lesions are identified in hepatic segments 7, 7/8, and 2, measuring 1.5 x 0.9 cm, 1.4 x 1.0 cm, and 1.2 x 0.9 cm, respectively. The spleen is normal in size, with a volume of 215.0 cc.\n\nThe pancreas is normal in size, with a volume of 72.1 cc. The kidneys are also normal in size, with a total volume of 283.7 cc. However, there are multiple hypoattenuating kidney lesions identified. The largest lesion, located in the left kidney, measures 1.5 x 1.1 cm (image 66) with a volume of 1.2 cc. Two additional smaller lesions are identified in the right kidney, measuring 0.9 x 0.7 cm and 0.6 x 0.5 cm, respectively.\n\nLYMPH NODES, MESENTERY, AND OMENTUM: \nNo significant findings are noted in the lymph nodes, mesentery, or omentum.\n\nPELVIS: \nNo significant findings are noted in the pelvis.\n\nOTHER ABDOMINAL AND PELVIC STRUCTURES: \nNo ascites or fluid collection is demonstrated. No evidence of venous thrombosis is seen.\n\nBONES: \nNo bone lesions suspicious for metastases are identified.\n\nIMPRESSION:\n1. Multiple (4) hypoattenuating liver masses, with the largest one measuring 2.7 x 2.0 cm in hepatic segment 1.\n2. Multiple (3) hypoattenuating kidney masses, with the largest one measuring 1.5 x 1.1 cm in the left kidney.",
      pred_report: "lower thorax: mild bibasilar atelectasis. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: no evidence of bowel obstruction. the appendix is normal in appearance and air-filled, without surrounding inflammatory changes or periappendiceal fluid collection to suggest acute appendicitis. peritoneal cavity: no free fluid. abdominal wall: normal. bladder: normal. uterus and ovaries: surgically absent. vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.0349, "BLEU-2": 0.0179, "BLEU-3": 0.0108, "BLEU-4": 0.0036, "ROUGE-1": 0.1925, "ROUGE-2": 0.0484, "ROUGE-L": 0.1230 },
      missed_findings: [
        "4 hypoattenuating liver masses (largest 2.7 x 2.0 cm) — Merlin says 'liver: normal'",
        "3 hypoattenuating kidney masses (largest 1.5 x 1.1 cm) — Merlin says 'kidneys: normal'"
      ],
      five_year: { "CVD": 0.627, "IHD": 0.600, "HTN": 0.644, "DM": 0.625, "CKD": 0.623, "CLD": 0.600 }
    },
    {
      case_id: "BDMAP_00003687",
      pathology: "ovarian",
      nifti_url: "data/merlin_evals/BDMAP_00003687.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00003687_thumb.png",
      gt_report: "The patient has a normal-sized spleen with a volume of 241.0 cc. The liver is also normal in size, with a volume of 2204.9 cc. However, there are four liver lesions identified. The largest lesion is located in hepatic segments 2 and 3, measuring 10.2 x 6.5 cm, with a volume of 136.9 cc. This lesion is hypoattenuating, with a mean HU value of 13.7 +/- 30.9. Three smaller hypoattenuating liver lesions are also present, located in hepatic segments 3, 2, and 2, measuring 2.8 x 1.5 cm, 1.8 x 1.4 cm, and 0.9 x 0.8 cm, respectively.\n\nThe pancreas is normal in size, with a volume of 59.0 cc. The bilateral kidneys are enlarged, with a total volume of 553.4 cc. A large hypoattenuating kidney lesion is present in the left kidney, measuring 5.2 x 4.4 cm, with a volume of 51.9 cc.\n\nThe stomach is not mentioned in the findings, but the bowel is not well evaluated due to poor distention. However, there is probable generalized small and large bowel wall thickening. The appendix is unremarkable.\n\nThe urinary bladder is moderately distended with circumferential bladder wall thickening probably due to nondistention. The uterus is unremarkable. There are no adnexal masses.\n\nThe visualized aorta is normal in caliber. The IVC is unremarkable.\n\nThere are no suspicious osseous lesions.\n\nIMPRESSION:\n1. A large hypoattenuating liver mass (10.2 x 6.5 cm) in hepatic segments 2 and 3, with three smaller hypoattenuating liver lesions.\n2. Enlarged kidneys with a large hypoattenuating kidney mass (5.2 x 4.4 cm) in the left kidney.",
      pred_report: "lower thorax: mild bibasilar atelectasis. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: no evidence of bowel obstruction. normal appendix (3/291). peritoneal cavity: no free fluid. abdominal wall: normal. pelvis: the bladder is decompressed. there are no uterine abnormalities. bones/soft tissues: degenerative change of the spine and hips, with grade 1 anterolisthesis l4 on l5. vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.0356, "BLEU-2": 0.0163, "BLEU-3": 0.0074, "BLEU-4": 0.0028, "ROUGE-1": 0.1798, "ROUGE-2": 0.0329, "ROUGE-L": 0.1199 },
      missed_findings: [
        "Large hypoattenuating liver mass (10.2 x 6.5 cm, 136.9 cc) — Merlin says 'liver: normal'",
        "3 additional smaller liver lesions — not mentioned",
        "Enlarged kidneys (total 553.4 cc) with 5.2 x 4.4 cm kidney mass — Merlin says 'kidneys: normal'",
        "Bowel wall thickening — Merlin says 'no bowel obstruction'"
      ],
      five_year: { "CVD": 0.596, "IHD": 0.585, "HTN": 0.659, "DM": 0.598, "CKD": 0.587, "CLD": 0.554 }
    },
    {
      case_id: "BDMAP_00004336",
      pathology: "ovarian",
      nifti_url: "data/merlin_evals/BDMAP_00004336.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00004336_thumb.png",
      gt_report: "The patient has a massively enlarged spleen, measuring 518.7 cc in volume. The liver is of normal size, with a volume of 2042.9 cc, but contains four hypoattenuating lesions. The largest lesion, located in hepatic segment 8, measures 3.9 x 2.6 cm and has a volume of 16.0 cc. The other lesions are smaller, with volumes ranging from 1.4 to 5.8 cc, and are located in hepatic segments 6, 7, and 8. The pancreas is also enlarged, with a volume of 132.0 cc. The bilateral kidneys are enlarged, with volumes of 232.2 cc and 253.7 cc, and contain two small hypoattenuating lesions, each measuring 0.6 cm in diameter.\n\nThe liver, pancreas, and kidneys all demonstrate normal enhancement patterns, with mean Hounsfield unit (HU) values of 111.1, 65.0, and 117.0, respectively. The spleen has a mean HU value of 97.5.\n\nThere is no evidence of bowel obstruction, ascites, or free fluid in the abdomen. The abdominal aorta and inferior vena cava are normal in caliber.\n\nIMPRESSION:\n1. Massively enlarged spleen.\n2. Multiple hypoattenuating liver masses, with the largest measuring 3.9 x 2.6 cm.\n3. Enlarged pancreas.\n4. Enlarged kidneys with multiple hypoattenuating masses.",
      pred_report: "lower thorax: mild bibasilar atelectasis. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: no evidence of bowel obstruction. normal appendix (3/290). peritoneal cavity: no free fluid. abdominal wall: normal. pelvis: the liver is normal without evidence of enhancing masses or biliary dilatation. a 1 cm hypodensity in segment ivb (3/90) likely represents a cyst, unchanged from prior examination. hepatic and portal veins are patent. evaluation of the gallbladder demonstrates no evidence of stones, wall thickening, or pericholecystic fluid. the spleen appears normal in size. no evidence of splenic masses. evaluation of the pancreas demonstrates no evidence of a mass or calcifications. no pan vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.2068, "BLEU-2": 0.0950, "BLEU-3": 0.0509, "BLEU-4": 0.0284, "ROUGE-1": 0.3265, "ROUGE-2": 0.0704, "ROUGE-L": 0.1691 },
      missed_findings: [
        "Massively enlarged spleen (518.7 cc) — Merlin says 'spleen: normal'",
        "4 hypoattenuating liver masses (largest 3.9 x 2.6 cm) — Merlin says 'liver: normal'",
        "Enlarged pancreas (132.0 cc) — Merlin says 'pancreas: normal'",
        "Enlarged kidneys (232 + 254 cc) with lesions — Merlin says 'kidneys: normal'"
      ],
      five_year: { "CVD": 0.621, "IHD": 0.593, "HTN": 0.642, "DM": 0.613, "CKD": 0.616, "CLD": 0.595 }
    },
    {
      case_id: "BDMAP_00008992",
      pathology: "ovarian",
      nifti_url: "data/merlin_evals/BDMAP_00008992.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00008992_thumb.png",
      gt_report: "FINDINGS:\nCHEST: \nNo abnormalities were noted in the chest.\n\nABDOMEN:\nABDOMINAL ORGANS (INCLUDING BILIARY TREE): The liver is normal in size and appearance, with a volume of 1785.4 cc. The spleen is enlarged, measuring a volume of 344.4 cc. The pancreas is also enlarged, with a volume of 128.3 cc. The kidneys are bilaterally enlarged, with the right kidney measuring 281.7 cc and the left kidney measuring 245.2 cc, for a total kidney volume of 526.9 cc. The gallbladder, biliary tree, and adrenals are intact and unchanged.\n\nLYMPH NODES, MESENTERY, AND OMENTUM: No retrocrural, retroperitoneal, or mesenteric adenopathy is seen.\n\nPELVIS: The bladder and prostate are unremarkable and unchanged. No pelvic masses or evidence of pelvic or inguinal adenopathy is seen.\n\nOTHER ABDOMINAL AND PELVIC STRUCTURES: No ascites or fluid collections are demonstrated. No evidence of venous thrombosis is noted.\n\nBONES: No bone lesions suspicious for metastases are identified.\n\nIMPRESSION:\n1. Enlarged spleen, measuring 344.4 cc.\n2. Enlarged pancreas, measuring 128.3 cc.\n3. Bilaterally enlarged kidneys, with a total volume of 526.9 cc.",
      pred_report: "lower thorax: normal. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: no evidence of bowel obstruction. normal appendix (3/295). peritoneal cavity: no free fluid. abdominal wall: normal. bladder: normal. uterus and ovaries: the uterus is surgically absent with bilateral salpingo-oophorectomy. vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.0674, "BLEU-2": 0.0257, "BLEU-3": 0.0130, "BLEU-4": 0.0052, "ROUGE-1": 0.2767, "ROUGE-2": 0.0398, "ROUGE-L": 0.1265 },
      missed_findings: [
        "Enlarged spleen (344.4 cc) — Merlin says 'spleen: normal'",
        "Enlarged pancreas (128.3 cc) — Merlin says 'pancreas: normal'",
        "Bilaterally enlarged kidneys (total 526.9 cc) — Merlin says 'kidneys: normal'"
      ],
      five_year: { "CVD": 0.542, "IHD": 0.536, "HTN": 0.531, "DM": 0.530, "CKD": 0.533, "CLD": 0.525 }
    },
    {
      case_id: "BDMAP_00000479",
      pathology: "liver_nafld",
      nifti_url: "data/merlin_evals/BDMAP_00000479.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00000479_thumb.png",
      gt_report: "The spleen is of normal size, measuring 85.7 cc in volume, with a mean Hounsfield Unit (HU) value of 38.1 +/- 46.7. The liver is also of normal size, with a volume of 1540.9 cc, and demonstrates normal attenuation, with a mean HU value of 57.1 +/- 30.2. The pancreas is of normal size, with a volume of 68.1 cc, and shows fatty infiltration, with a mean HU value of 23.0 +/- 27.8, and a pancreatic index (P/S) of 0.6. The kidneys are of normal size, with the right kidney measuring 140.6 cc and the left kidney measuring 139.7 cc, for a total kidney volume of 280.3 cc, and a mean HU value of 27.4 +/- 20.0.\n\nIMPRESSION:\nNo tumor is observed in the liver, pancreas, or kidneys.",
      pred_report: "lower thorax: mild dependent atelectasis. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: no evidence of bowel obstruction. normal appendix (3/290). peritoneal cavity: no free fluid. abdominal wall: normal. pelvis: the bladder is normal. there are no pathologically enlarged pelvic lymph nodes. a small amount of free fluid in the pelvis, likely physiological. vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.1253, "BLEU-2": 0.0297, "BLEU-3": 0.0086, "BLEU-4": 0.0046, "ROUGE-1": 0.2242, "ROUGE-2": 0.0090, "ROUGE-L": 0.1614 },
      missed_findings: [
        "Pancreatic fatty infiltration (HU 23.0, P/S index 0.6) — Merlin says 'pancreas: normal'",
        "Low liver HU (57.1) and spleen HU (38.1) — possible steatosis not mentioned"
      ],
      five_year: { "CVD": 0.575, "IHD": 0.565, "HTN": 0.587, "DM": 0.563, "CKD": 0.566, "CLD": 0.550 }
    },
    {
      case_id: "BDMAP_00003258",
      pathology: "liver_nafld",
      nifti_url: "data/merlin_evals/BDMAP_00003258.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00003258_thumb.png",
      gt_report: "The spleen is normal in size, measuring 248.9 cc in volume, with a mean HU value of 116.8 +/- 27.7. The liver is also normal in size, with a volume of 1850.5 cc and a mean HU value of 118.9 +/- 23.6. However, there is a large hypoattenuating liver lesion located in hepatic segments 5 and 6, measuring 10.5 x 7.0 cm on image 88, with a volume of 283.6 cc and a HU value of 57.3 +/- 24.0.\n\nThe pancreas is enlarged, with a volume of 98.9 cc and a mean HU value of -2.3 +/- 51.7. The kidneys have a mean HU value of 135.6 +/- 66.9. There are several hypoattenuating kidney lesions, including a large lesion in the left kidney, measuring 6.8 x 5.9 cm on image 22, with a volume of 120.7 cc and a HU value of 12.1 +/- 16.2. Additionally, there are four smaller hypoattenuating kidney lesions, with sizes ranging from 0.5 to 1.7 cm, located in both the left and right kidneys.\n\nIMPRESSION:\n1. A large hypoattenuating liver mass, measuring 10.5 x 7.0 cm, located in hepatic segments 5 and 6.\n2. An enlarged pancreas.\n3. A large hypoattenuating kidney mass, measuring 6.8 x 5.9 cm, located in the left kidney, along with four smaller hypoattenuating kidney lesions.",
      pred_report: "lower thorax: there is mild dependent atelectasis. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: no evidence of bowel obstruction. the appendix is normal in appearance and air-filled, without surrounding inflammatory changes or fluid collection to suggest acute appendicitis. peritoneal cavity: no free fluid. abdominal wall: normal. pelvis: the liver is normal without evidence of enhancing masses or biliary dilatation. a 1 cm hypodensity in segment ivb (3/90) likely represents a cyst, unchanged from prior examination. hepatic and portal veins are patent. evaluation of the gallbladder demonstrates no evidence of stones, wall thickening, or pericholecystic fluid. the spleen appears normal in size. no evidence of splenic masses. evaluation of the pancreas demonstrates no evidence of a mass or calcifications. no pan vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.1815, "BLEU-2": 0.0843, "BLEU-3": 0.0396, "BLEU-4": 0.0129, "ROUGE-1": 0.2526, "ROUGE-2": 0.0518, "ROUGE-L": 0.1392 },
      missed_findings: [
        "Large hypoattenuating liver mass (10.5 x 7.0 cm, 283.6 cc) — Merlin says 'liver: normal'",
        "Enlarged pancreas (98.9 cc, HU -2.3) — Merlin says 'pancreas: normal'",
        "Large kidney mass (6.8 x 5.9 cm, 120.7 cc) + 4 smaller lesions — Merlin says 'kidneys: normal'"
      ],
      five_year: { "CVD": 0.624, "IHD": 0.589, "HTN": 0.644, "DM": 0.624, "CKD": 0.614, "CLD": 0.595 }
    },
    {
      case_id: "BDMAP_00003489",
      pathology: "liver_nafld",
      nifti_url: "data/merlin_evals/BDMAP_00003489.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00003489_thumb.png",
      gt_report: "The spleen is normal in size, measuring 125.3 cc in volume, with a mean Hounsfield Unit (HU) value of 107.9 +/- 31.2. The liver is also normal in size, with a volume of 1485.2 cc and a mean HU value of 102.2 +/- 20.4. However, a hypoattenuating liver lesion is identified in hepatic segment 4, measuring 1.5 x 1.3 cm in size and 1.2 cc in volume, with a HU value of 39.6 +/- 30.5.\n\nThe pancreas is enlarged, with a volume of 99.9 cc and a mean HU value of 76.9 +/- 29.0. Both kidneys are also enlarged, with the right kidney measuring 180.5 cc in volume and the left kidney measuring 221.2 cc in volume, for a total kidney volume of 401.7 cc. The mean HU value for the kidneys is 129.8 +/- 48.1.",
      pred_report: "lower thorax: mild dependent atelectasis. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: no evidence of bowel obstruction. normal appendix (3/287). peritoneal cavity: no free fluid. abdominal wall: normal. pelvis: the bladder is normal. there are no pathologically enlarged pelvic lymph nodes. a small amount of free fluid in the pelvis, likely physiological. vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.1136, "BLEU-2": 0.0467, "BLEU-3": 0.0304, "BLEU-4": 0.0207, "ROUGE-1": 0.1974, "ROUGE-2": 0.0346, "ROUGE-L": 0.1288 },
      missed_findings: [
        "Hypoattenuating liver lesion in segment 4 (1.5 x 1.3 cm) — Merlin says 'liver: normal'",
        "Enlarged pancreas (99.9 cc) — Merlin says 'pancreas: normal'",
        "Enlarged kidneys (total 401.7 cc) — Merlin says 'kidneys: normal'"
      ],
      five_year: { "CVD": 0.545, "IHD": 0.542, "HTN": 0.576, "DM": 0.538, "CKD": 0.548, "CLD": 0.528 }
    },
    {
      case_id: "BDMAP_00004185",
      pathology: "liver_nafld",
      nifti_url: "data/merlin_evals/BDMAP_00004185.nii.gz",
      thumb_url: "images/merlin_evals/BDMAP_00004185_thumb.png",
      gt_report: "The patient's spleen is of normal size, measuring 147.4 cc in volume, with a mean Hounsfield Unit (HU) value of 155.3 +/- 47.0. The liver is also of normal size, with a volume of 1770.6 cc and a mean HU value of 72.8 +/- 27.0. However, a hypoattenuating liver lesion is identified in hepatic segment 2, measuring 2.0 x 1.4 cm in size and 1.1 cc in volume, with a HU value of 19.7 +/- 18.3.\n\nThe pancreas is enlarged, with a volume of 89.4 cc and a mean HU value of 110.6 +/- 41.8. Both kidneys are also enlarged, with the right kidney measuring 172.2 cc in volume and the left kidney measuring 218.4 cc in volume, for a total kidney volume of 390.6 cc. The mean HU value for the kidneys is 114.6 +/- 70.1.\n\nIMPRESSION:\n1. A hypoattenuating liver mass in hepatic segment 2, measuring 2.0 x 1.4 cm.\n2. Enlarged pancreas.\n3. Enlarged kidneys.",
      pred_report: "lower thorax: mild bibasilar atelectasis. liver and biliary tree: normal. gallbladder: normal. spleen: normal. pancreas: normal. adrenal glands: normal. kidneys and ureters: normal. gastrointestinal tract: postsurgical changes of right hemicolectomy with ileocolic anastomosis. no evidence for bowel obstruction or acute inflammatory process in the abdomen and pelvis. peritoneal cavity: no free fluid. abdominal wall: normal. bladder: normal. uterus and ovaries: surgically absent. vasculature: patent. lymph nodes: normal. musculoskeletal: no aggressive osseous lesion is identified in the abdomen or pelvis.",
      metrics: { "BLEU-1": 0.0792, "BLEU-2": 0.0335, "BLEU-3": 0.0220, "BLEU-4": 0.0151, "ROUGE-1": 0.1654, "ROUGE-2": 0.0238, "ROUGE-L": 0.0866 },
      missed_findings: [
        "Hypoattenuating liver lesion in segment 2 (2.0 x 1.4 cm, HU 19.7) — Merlin says 'liver: normal'",
        "Enlarged pancreas (89.4 cc) — Merlin says 'pancreas: normal'",
        "Enlarged kidneys (total 390.6 cc) — Merlin says 'kidneys: normal'"
      ],
      five_year: { "CVD": 0.615, "IHD": 0.574, "HTN": 0.653, "DM": 0.604, "CKD": 0.604, "CLD": 0.570 }
    }
  ],
  summary: {
    "BLEU-1": { mean: 0.0946, std: 0.0584, n: 10 },
    "BLEU-2": { mean: 0.0391, std: 0.0269, n: 10 },
    "BLEU-3": { mean: 0.0206, std: 0.0143, n: 10 },
    "BLEU-4": { mean: 0.0102, std: 0.0084, n: 10 },
    "ROUGE-1": { mean: 0.2275, std: 0.0473, n: 10 },
    "ROUGE-2": { mean: 0.0415, std: 0.0169, n: 10 },
    "ROUGE-L": { mean: 0.1327, std: 0.0216, n: 10 }
  }
};
