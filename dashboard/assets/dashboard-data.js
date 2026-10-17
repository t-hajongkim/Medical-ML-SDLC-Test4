window.DASHBOARD_DATA = {
  "dataset": {
    "data_id": "c34ec224503e2038c79fd11c47e0f603c7e392ba46f4e8c14e1661bfaf5303fd",
    "feature_columns": [
      "admission_type_id",
      "discharge_disposition_id",
      "admission_source_id",
      "time_in_hospital",
      "num_lab_procedures",
      "num_procedures",
      "num_medications",
      "number_outpatient",
      "number_emergency",
      "number_inpatient",
      "number_diagnoses",
      "A1Cresult_is_missing",
      "weight_is_missing",
      "race_is_missing",
      "medical_specialty_is_missing",
      "payer_code_is_missing",
      "unique_diagnosis_categories",
      "number_outpatient_mean",
      "number_outpatient_max",
      "number_outpatient_sum",
      "number_emergency_mean",
      "number_emergency_max",
      "number_emergency_sum",
      "number_inpatient_mean",
      "number_inpatient_max",
      "number_inpatient_sum",
      "total_visits",
      "medication_complexity_score",
      "care_utilization_risk_score",
      "age_bucket",
      "bmi_underweight",
      "bmi_normal",
      "bmi_overweight",
      "bmi_obese",
      "los_medication_interaction",
      "med_diagnosis_interaction",
      "race_Asian",
      "race_Caucasian",
      "race_Hispanic",
      "race_Other",
      "gender_Male",
      "gender_Unknown_Invalid",
      "weight_0_25)",
      "weight_100_125)",
      "weight_125_150)",
      "weight_150_175)",
      "weight_175_200)",
      "weight_25_50)",
      "weight_50_75)",
      "weight_75_100)",
      "max_glu_serum_300",
      "max_glu_serum_Norm",
      "A1Cresult_8",
      "A1Cresult_Norm",
      "metformin_No",
      "metformin_Steady",
      "metformin_Up",
      "repaglinide_No",
      "repaglinide_Steady",
      "repaglinide_Up",
      "nateglinide_No",
      "nateglinide_Steady",
      "nateglinide_Up",
      "chlorpropamide_No",
      "chlorpropamide_Steady",
      "chlorpropamide_Up",
      "glimepiride_No",
      "glimepiride_Steady",
      "glimepiride_Up",
      "acetohexamide_Steady",
      "glipizide_No",
      "glipizide_Steady",
      "glipizide_Up",
      "glyburide_No",
      "glyburide_Steady",
      "glyburide_Up",
      "tolbutamide_Steady",
      "pioglitazone_No",
      "pioglitazone_Steady",
      "pioglitazone_Up",
      "rosiglitazone_No",
      "rosiglitazone_Steady",
      "rosiglitazone_Up",
      "acarbose_No",
      "acarbose_Steady",
      "acarbose_Up",
      "miglitol_No",
      "miglitol_Steady",
      "miglitol_Up",
      "troglitazone_Steady",
      "tolazamide_Steady",
      "tolazamide_Up",
      "insulin_No",
      "insulin_Steady",
      "insulin_Up",
      "glyburide_metformin_No",
      "glyburide_metformin_Steady",
      "glyburide_metformin_Up",
      "glipizide_metformin_Steady",
      "glimepiride_pioglitazone_Steady",
      "metformin_rosiglitazone_Steady",
      "metformin_pioglitazone_Steady",
      "change_No",
      "diabetesMed_Yes",
      "age_target_encoded",
      "payer_code_target_encoded",
      "medical_specialty_target_encoded",
      "diag_1_target_encoded",
      "diag_2_target_encoded",
      "diag_3_target_encoded",
      "diag_1_cat_target_encoded",
      "diag_2_cat_target_encoded",
      "diag_3_cat_target_encoded"
    ],
    "feature_count": 113,
    "patient_overlap": {
      "train_test": 5086,
      "train_validation": 5055,
      "validation_test": 1760
    },
    "race_missing": {
      "test": 341,
      "train": 1596,
      "validation": 336
    },
    "split_rows": {
      "test": 15265,
      "train": 71236,
      "validation": 15265
    },
    "target_mapping": {
      "<30": 1,
      ">30": 0,
      "NO": 0
    }
  },
  "eda": {
    "assessment_status": "failed",
    "executed_ids": [
      "label_observability",
      "preprocessing_lineage",
      "prediction_timing"
    ],
    "results": [
      {
        "block": "schema",
        "details": {
          "actual_count": 113,
          "clinical_semantics": {
            "reason": "No verified clinical variable dictionary or units supplied.",
            "status": "unverifiable"
          },
          "constant_interpretation": "Measured quality observation, not automatic variable removal.",
          "duplicate_columns": 0,
          "expected_count": 113,
          "feature_columns": [
            "admission_type_id",
            "discharge_disposition_id",
            "admission_source_id",
            "time_in_hospital",
            "num_lab_procedures",
            "num_procedures",
            "num_medications",
            "number_outpatient",
            "number_emergency",
            "number_inpatient",
            "number_diagnoses",
            "A1Cresult_is_missing",
            "weight_is_missing",
            "race_is_missing",
            "medical_specialty_is_missing",
            "payer_code_is_missing",
            "unique_diagnosis_categories",
            "number_outpatient_mean",
            "number_outpatient_max",
            "number_outpatient_sum",
            "number_emergency_mean",
            "number_emergency_max",
            "number_emergency_sum",
            "number_inpatient_mean",
            "number_inpatient_max",
            "number_inpatient_sum",
            "total_visits",
            "medication_complexity_score",
            "care_utilization_risk_score",
            "age_bucket",
            "bmi_underweight",
            "bmi_normal",
            "bmi_overweight",
            "bmi_obese",
            "los_medication_interaction",
            "med_diagnosis_interaction",
            "race_Asian",
            "race_Caucasian",
            "race_Hispanic",
            "race_Other",
            "gender_Male",
            "gender_Unknown_Invalid",
            "weight_0_25)",
            "weight_100_125)",
            "weight_125_150)",
            "weight_150_175)",
            "weight_175_200)",
            "weight_25_50)",
            "weight_50_75)",
            "weight_75_100)",
            "max_glu_serum_300",
            "max_glu_serum_Norm",
            "A1Cresult_8",
            "A1Cresult_Norm",
            "metformin_No",
            "metformin_Steady",
            "metformin_Up",
            "repaglinide_No",
            "repaglinide_Steady",
            "repaglinide_Up",
            "nateglinide_No",
            "nateglinide_Steady",
            "nateglinide_Up",
            "chlorpropamide_No",
            "chlorpropamide_Steady",
            "chlorpropamide_Up",
            "glimepiride_No",
            "glimepiride_Steady",
            "glimepiride_Up",
            "acetohexamide_Steady",
            "glipizide_No",
            "glipizide_Steady",
            "glipizide_Up",
            "glyburide_No",
            "glyburide_Steady",
            "glyburide_Up",
            "tolbutamide_Steady",
            "pioglitazone_No",
            "pioglitazone_Steady",
            "pioglitazone_Up",
            "rosiglitazone_No",
            "rosiglitazone_Steady",
            "rosiglitazone_Up",
            "acarbose_No",
            "acarbose_Steady",
            "acarbose_Up",
            "miglitol_No",
            "miglitol_Steady",
            "miglitol_Up",
            "troglitazone_Steady",
            "tolazamide_Steady",
            "tolazamide_Up",
            "insulin_No",
            "insulin_Steady",
            "insulin_Up",
            "glyburide_metformin_No",
            "glyburide_metformin_Steady",
            "glyburide_metformin_Up",
            "glipizide_metformin_Steady",
            "glimepiride_pioglitazone_Steady",
            "metformin_rosiglitazone_Steady",
            "metformin_pioglitazone_Steady",
            "change_No",
            "diabetesMed_Yes",
            "age_target_encoded",
            "payer_code_target_encoded",
            "medical_specialty_target_encoded",
            "diag_1_target_encoded",
            "diag_2_target_encoded",
            "diag_3_target_encoded",
            "diag_1_cat_target_encoded",
            "diag_2_cat_target_encoded",
            "diag_3_cat_target_encoded"
          ],
          "numeric_contract": "passed",
          "quality": {
            "A1Cresult_8": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.30851298160713536,
              "min": -3.241354690459717,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "A1Cresult_Norm": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 4.409166140498605,
              "min": -0.22680025386544314,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "A1Cresult_is_missing": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.44767306035415355,
              "min": -2.2337730110650416,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "acarbose_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.05476338634279791,
              "min": -18.260375531570826,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "acarbose_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 18.66001281970011,
              "min": -0.053590531242522,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "acarbose_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 100.87403743566244,
              "min": -0.00991335357859351,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "acetohexamide_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 1.0,
              "min": 0.0,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "admission_source_id": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 4.743575152386659,
              "min": -1.1699880193344054,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "admission_type_id": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 4.135750722388091,
              "min": -0.7090829967376786,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "age_bucket": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 1.4549812880753532,
              "min": -2.202074179281396,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "age_target_encoded": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.930592188597158,
              "min": -5.805252347856898,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "bmi_normal": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.09255076434416118,
              "min": -10.804881051888287,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "bmi_obese": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 45.76217292249391,
              "min": -0.02185210920149424,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "bmi_overweight": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 11.441963053537556,
              "min": -0.087397590371595,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "bmi_underweight": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 47.92635479431925,
              "min": -0.02086534651532753,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "care_utilization_risk_score": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.444418894305451,
              "min": -0.6324418170602,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "change_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.9281981085110433,
              "min": -1.0773562139704602,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "chlorpropamide_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.02854572689039564,
              "min": -35.0315129069774,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "chlorpropamide_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 35.97499131341104,
              "min": -0.027797088018398267,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "chlorpropamide_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 188.7246671741667,
              "min": -0.005298724406159045,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "diabetesMed_Yes": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.5457281696813299,
              "min": -1.8324141130261526,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "diag_1_cat_target_encoded": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 4.273900291234416,
              "min": -1.4642644753767027,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "diag_1_target_encoded": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 7.887424945197355,
              "min": -2.009453240234232,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "diag_2_cat_target_encoded": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 5.163128671861478,
              "min": -1.5110567063743197,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "diag_2_target_encoded": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 4.152647973331705,
              "min": -2.3491590293369473,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "diag_3_cat_target_encoded": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 3.199851630665341,
              "min": -0.9887263394660526,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "diag_3_target_encoded": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 3.9736199889533537,
              "min": -1.6102378472468426,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "discharge_disposition_id": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 4.5946057439261425,
              "min": -0.5149446600885323,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "gender_Male": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 1.0779038575159512,
              "min": -0.9277265249838869,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "gender_Unknown_Invalid": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 154.09196388304397,
              "min": -0.0064896310930205375,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glimepiride_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.23138198769772728,
              "min": -4.321857591207054,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glimepiride_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 4.578133844095352,
              "min": -0.21842961216386228,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glimepiride_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 17.41916618059976,
              "min": -0.05740802915777504,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glimepiride_pioglitazone_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 266.89885724745994,
              "min": -0.0037467376605244606,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glipizide_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.3780978643925964,
              "min": -2.644817900800556,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glipizide_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.81585775581397,
              "min": -0.35513157507167237,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glipizide_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 11.572236891226632,
              "min": -0.08641371667375208,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glipizide_metformin_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 94.35835946009234,
              "min": -0.01059789514910904,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glyburide_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.33972831676216275,
              "min": -2.943528551080658,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glyburide_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 3.1869693579217278,
              "min": -0.3137777266399937,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glyburide_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 10.942530925286317,
              "min": -0.09138653633495068,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glyburide_metformin_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.08330918207289569,
              "min": -12.003478789708831,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glyburide_metformin_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 12.128470311617706,
              "min": -0.08245062850523803,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "glyburide_metformin_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 108.95717813281817,
              "min": -0.00917791757401248,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "insulin_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 1.0730168050991218,
              "min": -0.9319518531749585,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "insulin_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 1.5157019305123482,
              "min": -0.6597603261361374,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "insulin_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.8226354522456343,
              "min": -0.3542788351235436,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "los_medication_interaction": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 10.979964186048482,
              "min": -0.47226391891925673,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "max_glu_serum_300": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 8.95694757828706,
              "min": -0.11164517725035536,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "max_glu_serum_Norm": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.16531397050671529,
              "min": -6.049095529765767,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "med_diagnosis_interaction": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 5.044414845282489,
              "min": -1.721097291390764,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "medical_specialty_is_missing": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 1.0169326001227719,
              "min": -0.9833493388640232,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "medical_specialty_target_encoded": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 6.8479306426231235,
              "min": -4.817298802298316,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "medication_complexity_score": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 7.597757679627774,
              "min": -0.5902872832085753,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "metformin_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.4947916618764872,
              "min": -2.0210526511451716,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "metformin_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.1295639776824586,
              "min": -0.46957969353344825,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "metformin_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 9.76704297892138,
              "min": -0.10238513357196617,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "metformin_pioglitazone_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 266.89885724745994,
              "min": -0.0037467376605244606,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "metformin_rosiglitazone_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 188.7246671741667,
              "min": -0.005298724406159045,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "miglitol_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.018736844912158684,
              "min": -53.37077852158426,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "miglitol_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 58.23392890910312,
              "min": -0.017172119737290815,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "miglitol_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 188.7246671741667,
              "min": -0.005298724406159045,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "nateglinide_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.08373524792114823,
              "min": -11.942402092625063,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "nateglinide_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 12.231298016269193,
              "min": -0.08175747158395387,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "nateglinide_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 68.90621645879759,
              "min": -0.01451247871950638,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "num_lab_procedures": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.694808883474134,
              "min": -2.142042601617274,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "num_medications": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.603088896637011,
              "min": -2.0102046471883948,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "num_procedures": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.3570214126246083,
              "min": -0.8159742588771945,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_diagnoses": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 3.1598079013486893,
              "min": -3.0769197284652265,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_emergency": {
              "constant": true,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.0,
              "min": 0.0,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_emergency_max": {
              "constant": true,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.0,
              "min": 0.0,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_emergency_mean": {
              "constant": true,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.0,
              "min": 0.0,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_emergency_sum": {
              "constant": true,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.0,
              "min": 0.0,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_inpatient": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.444418894305451,
              "min": -0.6324418170602,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_inpatient_max": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 1.7532476547951554,
              "min": -0.8479592835350752,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_inpatient_mean": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.9767504075488365,
              "min": -0.7704822758111298,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_inpatient_sum": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 17.58604641265448,
              "min": -0.4109739837303321,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_outpatient": {
              "constant": true,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.0,
              "min": 0.0,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_outpatient_max": {
              "constant": true,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.0,
              "min": 0.0,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_outpatient_mean": {
              "constant": true,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.0,
              "min": 0.0,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "number_outpatient_sum": {
              "constant": true,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.0,
              "min": 0.0,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "payer_code_is_missing": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 1.2383319858260926,
              "min": -0.807537890845078,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "payer_code_target_encoded": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.0116522118390887,
              "min": -4.747567030932926,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "pioglitazone_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.27740040953486533,
              "min": -3.6048973455978777,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "pioglitazone_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 3.7009358186230616,
              "min": -0.2702019297303165,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "pioglitazone_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 21.209921251472643,
              "min": -0.047147746950289504,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "race_Asian": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 12.390518381813777,
              "min": -0.08070687352901662,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "race_Caucasian": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.5469195400893165,
              "min": -1.8284225131848304,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "race_Hispanic": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 6.954609792547484,
              "min": -0.1437895194453028,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "race_Other": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 8.007195119053154,
              "min": -0.12488767728670626,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "race_is_missing": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 6.605610131776821,
              "min": -0.1513864699930472,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "repaglinide_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.12284304717110832,
              "min": -8.140468858665614,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "repaglinide_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 8.606060549843107,
              "min": -0.11619718385762814,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "repaglinide_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 30.01202290728404,
              "min": -0.033319979899032265,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "rosiglitazone_No": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.2585621203797061,
              "min": -3.8675425407692026,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "rosiglitazone_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 3.9557319057319478,
              "min": -0.25279771830618164,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "rosiglitazone_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 24.65470950659733,
              "min": -0.040560202087654325,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "time_in_hospital": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.646810785899815,
              "min": -1.161733421374419,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "tolazamide_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 48.71892171767899,
              "min": -0.020525905844035186,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "tolazamide_Up": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 266.89885724745994,
              "min": -0.0037467376605244606,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "tolbutamide_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 71.32521093053784,
              "min": -0.014020288015325736,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "total_visits": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 2.444418894305451,
              "min": -0.6324418170602,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "troglitazone_Steady": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 188.7246671741667,
              "min": -0.005298724406159045,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "unique_diagnosis_categories": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.9890627256077321,
              "min": -2.085038904942341,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "weight_0_25)": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 47.92635479431925,
              "min": -0.02086534651532753,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "weight_100_125)": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 12.728371523788786,
              "min": -0.07856464577035974,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "weight_125_150)": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 26.27949106214648,
              "min": -0.03805248730407951,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "weight_150_175)": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 54.471705193308075,
              "min": -0.018358154870518926,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "weight_175_200)": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 94.35835946009234,
              "min": -0.01059789514910904,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "weight_25_50)": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 32.59177627250492,
              "min": -0.030682586663544942,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "weight_50_75)": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 10.646290396069034,
              "min": -0.09392943107856921,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "weight_75_100)": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.13607206183041604,
              "min": -7.3490471633058805,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            },
            "weight_is_missing": {
              "constant": false,
              "finite": 101766,
              "input_types": {
                "float": 101766
              },
              "max": 0.17843076737708957,
              "min": -5.604414612456562,
              "missing": 0,
              "non_finite": 0,
              "non_numeric": 0
            }
          },
          "range_interpretation": "Prepared standardized values; no raw clinical range judgment.",
          "row_issues": {
            "alignment_or_order": 0,
            "length": 0,
            "row_count": 0
          },
          "rows": 101766,
          "schema_match": true,
          "split_rows": {
            "test": 15265,
            "train": 71236,
            "validation": 15265
          }
        },
        "status": "unverifiable"
      },
      {
        "block": "patient_overlap",
        "details": {
          "admissions": {
            "test": 15265,
            "train": 71236,
            "validation": 15265
          },
          "overlaps": {
            "train_test": 5086,
            "train_validation": 5055,
            "validation_test": 1760
          },
          "patients": {
            "test": 14111,
            "train": 54057,
            "validation": 14070
          },
          "unit": "unique patients, not duplicate admission rows"
        },
        "status": "failed"
      },
      {
        "block": "demographics",
        "details": {
          "absent_groups": "Not observed, not invented zero-count populations.",
          "caucasian_imputed": {
            "test": 341,
            "train": 1596,
            "validation": 336
          },
          "distributions": {
            "test": {
              "age_group": {
                "[0-10)": {
                  "admissions": 29,
                  "event_rate": 0.0,
                  "patients": 29,
                  "patients_with_target_0": 29,
                  "patients_with_target_1": 0,
                  "target_0": 29,
                  "target_0_rate": 1.0,
                  "target_1": 0
                },
                "[10-20)": {
                  "admissions": 99,
                  "event_rate": 0.030303030303030304,
                  "patients": 97,
                  "patients_with_target_0": 95,
                  "patients_with_target_1": 3,
                  "target_0": 96,
                  "target_0_rate": 0.9696969696969697,
                  "target_1": 3
                },
                "[20-30)": {
                  "admissions": 254,
                  "event_rate": 0.13385826771653545,
                  "patients": 229,
                  "patients_with_target_0": 214,
                  "patients_with_target_1": 24,
                  "target_0": 220,
                  "target_0_rate": 0.8661417322834646,
                  "target_1": 34
                },
                "[30-40)": {
                  "admissions": 543,
                  "event_rate": 0.11970534069981584,
                  "patients": 500,
                  "patients_with_target_0": 457,
                  "patients_with_target_1": 59,
                  "target_0": 478,
                  "target_0_rate": 0.8802946593001841,
                  "target_1": 65
                },
                "[40-50)": {
                  "admissions": 1438,
                  "event_rate": 0.10152990264255911,
                  "patients": 1314,
                  "patients_with_target_0": 1224,
                  "patients_with_target_1": 128,
                  "target_0": 1292,
                  "target_0_rate": 0.8984700973574409,
                  "target_1": 146
                },
                "[50-60)": {
                  "admissions": 2590,
                  "event_rate": 0.08532818532818533,
                  "patients": 2415,
                  "patients_with_target_0": 2261,
                  "patients_with_target_1": 206,
                  "target_0": 2369,
                  "target_0_rate": 0.9146718146718147,
                  "target_1": 221
                },
                "[60-70)": {
                  "admissions": 3423,
                  "event_rate": 0.11510371019573473,
                  "patients": 3180,
                  "patients_with_target_0": 2888,
                  "patients_with_target_1": 381,
                  "target_0": 3029,
                  "target_0_rate": 0.8848962898042653,
                  "target_1": 394
                },
                "[70-80)": {
                  "admissions": 3889,
                  "event_rate": 0.12239650295705837,
                  "patients": 3633,
                  "patients_with_target_0": 3250,
                  "patients_with_target_1": 461,
                  "target_0": 3413,
                  "target_0_rate": 0.8776034970429416,
                  "target_1": 476
                },
                "[80-90)": {
                  "admissions": 2561,
                  "event_rate": 0.11948457633736821,
                  "patients": 2392,
                  "patients_with_target_0": 2152,
                  "patients_with_target_1": 290,
                  "target_0": 2255,
                  "target_0_rate": 0.8805154236626318,
                  "target_1": 306
                },
                "[90-100)": {
                  "admissions": 439,
                  "event_rate": 0.13439635535307518,
                  "patients": 401,
                  "patients_with_target_0": 366,
                  "patients_with_target_1": 55,
                  "target_0": 380,
                  "target_0_rate": 0.8656036446469249,
                  "target_1": 59
                }
              },
              "gender": {
                "Female": {
                  "admissions": 8187,
                  "event_rate": 0.1144497373885428,
                  "patients": 7529,
                  "patients_with_target_0": 6858,
                  "patients_with_target_1": 869,
                  "target_0": 7250,
                  "target_0_rate": 0.8855502626114572,
                  "target_1": 937
                },
                "Male": {
                  "admissions": 7078,
                  "event_rate": 0.10836394461712348,
                  "patients": 6582,
                  "patients_with_target_0": 6018,
                  "patients_with_target_1": 735,
                  "target_0": 6311,
                  "target_0_rate": 0.8916360553828765,
                  "target_1": 767
                }
              },
              "race": {
                "AfricanAmerican": {
                  "admissions": 2901,
                  "event_rate": 0.11271975180972078,
                  "patients": 2656,
                  "patients_with_target_0": 2435,
                  "patients_with_target_1": 308,
                  "target_0": 2574,
                  "target_0_rate": 0.8872802481902792,
                  "target_1": 327
                },
                "Asian": {
                  "admissions": 91,
                  "event_rate": 0.07692307692307693,
                  "patients": 88,
                  "patients_with_target_0": 82,
                  "patients_with_target_1": 7,
                  "target_0": 84,
                  "target_0_rate": 0.9230769230769231,
                  "target_1": 7
                },
                "Caucasian": {
                  "admissions": 11751,
                  "event_rate": 0.11190536975576547,
                  "patients": 10882,
                  "patients_with_target_0": 9914,
                  "patients_with_target_1": 1241,
                  "target_0": 10436,
                  "target_0_rate": 0.8880946302442345,
                  "target_1": 1315
                },
                "Hispanic": {
                  "admissions": 320,
                  "event_rate": 0.125,
                  "patients": 295,
                  "patients_with_target_0": 265,
                  "patients_with_target_1": 36,
                  "target_0": 280,
                  "target_0_rate": 0.875,
                  "target_1": 40
                },
                "Other": {
                  "admissions": 202,
                  "event_rate": 0.07425742574257425,
                  "patients": 195,
                  "patients_with_target_0": 184,
                  "patients_with_target_1": 14,
                  "target_0": 187,
                  "target_0_rate": 0.9257425742574258,
                  "target_1": 15
                }
              },
              "race_original": {
                "AfricanAmerican": {
                  "admissions": 2901,
                  "event_rate": 0.11271975180972078,
                  "patients": 2656,
                  "patients_with_target_0": 2435,
                  "patients_with_target_1": 308,
                  "target_0": 2574,
                  "target_0_rate": 0.8872802481902792,
                  "target_1": 327
                },
                "Asian": {
                  "admissions": 91,
                  "event_rate": 0.07692307692307693,
                  "patients": 88,
                  "patients_with_target_0": 82,
                  "patients_with_target_1": 7,
                  "target_0": 84,
                  "target_0_rate": 0.9230769230769231,
                  "target_1": 7
                },
                "Caucasian": {
                  "admissions": 11410,
                  "event_rate": 0.11288343558282209,
                  "patients": 10567,
                  "patients_with_target_0": 9615,
                  "patients_with_target_1": 1218,
                  "target_0": 10122,
                  "target_0_rate": 0.8871165644171779,
                  "target_1": 1288
                },
                "Hispanic": {
                  "admissions": 320,
                  "event_rate": 0.125,
                  "patients": 295,
                  "patients_with_target_0": 265,
                  "patients_with_target_1": 36,
                  "target_0": 280,
                  "target_0_rate": 0.875,
                  "target_1": 40
                },
                "MISSING_ORIGINAL": {
                  "admissions": 341,
                  "event_rate": 0.07917888563049853,
                  "patients": 318,
                  "patients_with_target_0": 301,
                  "patients_with_target_1": 24,
                  "target_0": 314,
                  "target_0_rate": 0.9208211143695014,
                  "target_1": 27
                },
                "Other": {
                  "admissions": 202,
                  "event_rate": 0.07425742574257425,
                  "patients": 195,
                  "patients_with_target_0": 184,
                  "patients_with_target_1": 14,
                  "target_0": 187,
                  "target_0_rate": 0.9257425742574258,
                  "target_1": 15
                }
              }
            },
            "train": {
              "age_group": {
                "[0-10)": {
                  "admissions": 111,
                  "event_rate": 0.02702702702702703,
                  "patients": 105,
                  "patients_with_target_0": 104,
                  "patients_with_target_1": 3,
                  "target_0": 108,
                  "target_0_rate": 0.972972972972973,
                  "target_1": 3
                },
                "[10-20)": {
                  "admissions": 483,
                  "event_rate": 0.062111801242236024,
                  "patients": 381,
                  "patients_with_target_0": 371,
                  "patients_with_target_1": 27,
                  "target_0": 453,
                  "target_0_rate": 0.937888198757764,
                  "target_1": 30
                },
                "[20-30)": {
                  "admissions": 1161,
                  "event_rate": 0.14728682170542637,
                  "patients": 843,
                  "patients_with_target_0": 812,
                  "patients_with_target_1": 93,
                  "target_0": 990,
                  "target_0_rate": 0.8527131782945736,
                  "target_1": 171
                },
                "[30-40)": {
                  "admissions": 2686,
                  "event_rate": 0.11355174981384959,
                  "patients": 2039,
                  "patients_with_target_0": 1966,
                  "patients_with_target_1": 219,
                  "target_0": 2381,
                  "target_0_rate": 0.8864482501861504,
                  "target_1": 305
                },
                "[40-50)": {
                  "admissions": 6826,
                  "event_rate": 0.1089950190448286,
                  "patients": 5200,
                  "patients_with_target_0": 5019,
                  "patients_with_target_1": 559,
                  "target_0": 6082,
                  "target_0_rate": 0.8910049809551714,
                  "target_1": 744
                },
                "[50-60)": {
                  "admissions": 12049,
                  "event_rate": 0.09942733836832932,
                  "patients": 9439,
                  "patients_with_target_0": 9069,
                  "patients_with_target_1": 957,
                  "target_0": 10851,
                  "target_0_rate": 0.9005726616316707,
                  "target_1": 1198
                },
                "[60-70)": {
                  "admissions": 15734,
                  "event_rate": 0.10957162832083386,
                  "patients": 12245,
                  "patients_with_target_0": 11653,
                  "patients_with_target_1": 1431,
                  "target_0": 14010,
                  "target_0_rate": 0.8904283716791661,
                  "target_1": 1724
                },
                "[70-80)": {
                  "admissions": 18218,
                  "event_rate": 0.1155999560873861,
                  "patients": 14089,
                  "patients_with_target_0": 13298,
                  "patients_with_target_1": 1814,
                  "target_0": 16112,
                  "target_0_rate": 0.884400043912614,
                  "target_1": 2106
                },
                "[80-90)": {
                  "admissions": 12034,
                  "event_rate": 0.12198770151238159,
                  "patients": 9153,
                  "patients_with_target_0": 8632,
                  "patients_with_target_1": 1291,
                  "target_0": 10566,
                  "target_0_rate": 0.8780122984876184,
                  "target_1": 1468
                },
                "[90-100)": {
                  "admissions": 1934,
                  "event_rate": 0.10392967942088935,
                  "patients": 1536,
                  "patients_with_target_0": 1473,
                  "patients_with_target_1": 178,
                  "target_0": 1733,
                  "target_0_rate": 0.8960703205791106,
                  "target_1": 201
                }
              },
              "gender": {
                "Female": {
                  "admissions": 38282,
                  "event_rate": 0.11253330546993365,
                  "patients": 28792,
                  "patients_with_target_0": 27432,
                  "patients_with_target_1": 3514,
                  "target_0": 33974,
                  "target_0_rate": 0.8874666945300663,
                  "target_1": 4308
                },
                "Male": {
                  "admissions": 32951,
                  "event_rate": 0.11052775333070317,
                  "patients": 25264,
                  "patients_with_target_0": 24082,
                  "patients_with_target_1": 3013,
                  "target_0": 29309,
                  "target_0_rate": 0.8894722466692968,
                  "target_1": 3642
                },
                "Unknown/Invalid": {
                  "admissions": 3,
                  "event_rate": 0.0,
                  "patients": 3,
                  "patients_with_target_0": 3,
                  "patients_with_target_1": 0,
                  "target_0": 3,
                  "target_0_rate": 1.0,
                  "target_1": 0
                }
              },
              "race": {
                "AfricanAmerican": {
                  "admissions": 13404,
                  "event_rate": 0.11086242912563414,
                  "patients": 9781,
                  "patients_with_target_0": 9417,
                  "patients_with_target_1": 1166,
                  "target_0": 11918,
                  "target_0_rate": 0.8891375708743658,
                  "target_1": 1486
                },
                "Asian": {
                  "admissions": 461,
                  "event_rate": 0.1019522776572668,
                  "patients": 384,
                  "patients_with_target_0": 364,
                  "patients_with_target_1": 39,
                  "target_0": 414,
                  "target_0_rate": 0.8980477223427332,
                  "target_1": 47
                },
                "Caucasian": {
                  "admissions": 54834,
                  "event_rate": 0.11232082284713864,
                  "patients": 41922,
                  "patients_with_target_0": 39848,
                  "patients_with_target_1": 5104,
                  "target_0": 48675,
                  "target_0_rate": 0.8876791771528614,
                  "target_1": 6159
                },
                "Hispanic": {
                  "admissions": 1443,
                  "event_rate": 0.0990990990990991,
                  "patients": 1142,
                  "patients_with_target_0": 1091,
                  "patients_with_target_1": 122,
                  "target_0": 1300,
                  "target_0_rate": 0.9009009009009009,
                  "target_1": 143
                },
                "Other": {
                  "admissions": 1094,
                  "event_rate": 0.10511882998171847,
                  "patients": 922,
                  "patients_with_target_0": 876,
                  "patients_with_target_1": 101,
                  "target_0": 979,
                  "target_0_rate": 0.8948811700182815,
                  "target_1": 115
                }
              },
              "race_original": {
                "AfricanAmerican": {
                  "admissions": 13404,
                  "event_rate": 0.11086242912563414,
                  "patients": 9781,
                  "patients_with_target_0": 9417,
                  "patients_with_target_1": 1166,
                  "target_0": 11918,
                  "target_0_rate": 0.8891375708743658,
                  "target_1": 1486
                },
                "Asian": {
                  "admissions": 461,
                  "event_rate": 0.1019522776572668,
                  "patients": 384,
                  "patients_with_target_0": 364,
                  "patients_with_target_1": 39,
                  "target_0": 414,
                  "target_0_rate": 0.8980477223427332,
                  "target_1": 47
                },
                "Caucasian": {
                  "admissions": 53238,
                  "event_rate": 0.11298320748337654,
                  "patients": 40544,
                  "patients_with_target_0": 38531,
                  "patients_with_target_1": 4972,
                  "target_0": 47223,
                  "target_0_rate": 0.8870167925166235,
                  "target_1": 6015
                },
                "Hispanic": {
                  "admissions": 1443,
                  "event_rate": 0.0990990990990991,
                  "patients": 1142,
                  "patients_with_target_0": 1091,
                  "patients_with_target_1": 122,
                  "target_0": 1300,
                  "target_0_rate": 0.9009009009009009,
                  "target_1": 143
                },
                "MISSING_ORIGINAL": {
                  "admissions": 1596,
                  "event_rate": 0.09022556390977443,
                  "patients": 1437,
                  "patients_with_target_0": 1363,
                  "patients_with_target_1": 134,
                  "target_0": 1452,
                  "target_0_rate": 0.9097744360902256,
                  "target_1": 144
                },
                "Other": {
                  "admissions": 1094,
                  "event_rate": 0.10511882998171847,
                  "patients": 922,
                  "patients_with_target_0": 876,
                  "patients_with_target_1": 101,
                  "target_0": 979,
                  "target_0_rate": 0.8948811700182815,
                  "target_1": 115
                }
              }
            },
            "validation": {
              "age_group": {
                "[0-10)": {
                  "admissions": 21,
                  "event_rate": 0.0,
                  "patients": 21,
                  "patients_with_target_0": 21,
                  "patients_with_target_1": 0,
                  "target_0": 21,
                  "target_0_rate": 1.0,
                  "target_1": 0
                },
                "[10-20)": {
                  "admissions": 109,
                  "event_rate": 0.06422018348623854,
                  "patients": 101,
                  "patients_with_target_0": 96,
                  "patients_with_target_1": 6,
                  "target_0": 102,
                  "target_0_rate": 0.9357798165137615,
                  "target_1": 7
                },
                "[20-30)": {
                  "admissions": 242,
                  "event_rate": 0.128099173553719,
                  "patients": 219,
                  "patients_with_target_0": 196,
                  "patients_with_target_1": 29,
                  "target_0": 211,
                  "target_0_rate": 0.871900826446281,
                  "target_1": 31
                },
                "[30-40)": {
                  "admissions": 546,
                  "event_rate": 0.0989010989010989,
                  "patients": 510,
                  "patients_with_target_0": 472,
                  "patients_with_target_1": 48,
                  "target_0": 492,
                  "target_0_rate": 0.9010989010989011,
                  "target_1": 54
                },
                "[40-50)": {
                  "admissions": 1421,
                  "event_rate": 0.0964109781843772,
                  "patients": 1303,
                  "patients_with_target_0": 1215,
                  "patients_with_target_1": 124,
                  "target_0": 1284,
                  "target_0_rate": 0.9035890218156228,
                  "target_1": 137
                },
                "[50-60)": {
                  "admissions": 2617,
                  "event_rate": 0.09514711501719526,
                  "patients": 2446,
                  "patients_with_target_0": 2268,
                  "patients_with_target_1": 234,
                  "target_0": 2368,
                  "target_0_rate": 0.9048528849828047,
                  "target_1": 249
                },
                "[60-70)": {
                  "admissions": 3326,
                  "event_rate": 0.11545399879735418,
                  "patients": 3084,
                  "patients_with_target_0": 2795,
                  "patients_with_target_1": 369,
                  "target_0": 2942,
                  "target_0_rate": 0.8845460012026458,
                  "target_1": 384
                },
                "[70-80)": {
                  "admissions": 3961,
                  "event_rate": 0.12294875031557688,
                  "patients": 3659,
                  "patients_with_target_0": 3287,
                  "patients_with_target_1": 469,
                  "target_0": 3474,
                  "target_0_rate": 0.8770512496844232,
                  "target_1": 487
                },
                "[80-90)": {
                  "admissions": 2602,
                  "event_rate": 0.11683320522674866,
                  "patients": 2405,
                  "patients_with_target_0": 2171,
                  "patients_with_target_1": 292,
                  "target_0": 2298,
                  "target_0_rate": 0.8831667947732513,
                  "target_1": 304
                },
                "[90-100)": {
                  "admissions": 420,
                  "event_rate": 0.11904761904761904,
                  "patients": 392,
                  "patients_with_target_0": 353,
                  "patients_with_target_1": 47,
                  "target_0": 370,
                  "target_0_rate": 0.8809523809523809,
                  "target_1": 50
                }
              },
              "gender": {
                "Female": {
                  "admissions": 8239,
                  "event_rate": 0.11008617550673626,
                  "patients": 7606,
                  "patients_with_target_0": 6931,
                  "patients_with_target_1": 872,
                  "target_0": 7332,
                  "target_0_rate": 0.8899138244932637,
                  "target_1": 907
                },
                "Male": {
                  "admissions": 7026,
                  "event_rate": 0.11329348135496727,
                  "patients": 6464,
                  "patients_with_target_0": 5886,
                  "patients_with_target_1": 745,
                  "target_0": 6230,
                  "target_0_rate": 0.8867065186450327,
                  "target_1": 796
                }
              },
              "race": {
                "AfricanAmerican": {
                  "admissions": 2905,
                  "event_rate": 0.11772805507745267,
                  "patients": 2666,
                  "patients_with_target_0": 2424,
                  "patients_with_target_1": 321,
                  "target_0": 2563,
                  "target_0_rate": 0.8822719449225473,
                  "target_1": 342
                },
                "Asian": {
                  "admissions": 89,
                  "event_rate": 0.12359550561797752,
                  "patients": 89,
                  "patients_with_target_0": 78,
                  "patients_with_target_1": 11,
                  "target_0": 78,
                  "target_0_rate": 0.8764044943820225,
                  "target_1": 11
                },
                "Caucasian": {
                  "admissions": 11787,
                  "event_rate": 0.11080003393569186,
                  "patients": 10861,
                  "patients_with_target_0": 9891,
                  "patients_with_target_1": 1244,
                  "target_0": 10481,
                  "target_0_rate": 0.8891999660643082,
                  "target_1": 1306
                },
                "Hispanic": {
                  "admissions": 274,
                  "event_rate": 0.10583941605839416,
                  "patients": 260,
                  "patients_with_target_0": 240,
                  "patients_with_target_1": 26,
                  "target_0": 245,
                  "target_0_rate": 0.8941605839416058,
                  "target_1": 29
                },
                "Other": {
                  "admissions": 210,
                  "event_rate": 0.07142857142857142,
                  "patients": 199,
                  "patients_with_target_0": 187,
                  "patients_with_target_1": 15,
                  "target_0": 195,
                  "target_0_rate": 0.9285714285714286,
                  "target_1": 15
                }
              },
              "race_original": {
                "AfricanAmerican": {
                  "admissions": 2905,
                  "event_rate": 0.11772805507745267,
                  "patients": 2666,
                  "patients_with_target_0": 2424,
                  "patients_with_target_1": 321,
                  "target_0": 2563,
                  "target_0_rate": 0.8822719449225473,
                  "target_1": 342
                },
                "Asian": {
                  "admissions": 89,
                  "event_rate": 0.12359550561797752,
                  "patients": 89,
                  "patients_with_target_0": 78,
                  "patients_with_target_1": 11,
                  "target_0": 78,
                  "target_0_rate": 0.8764044943820225,
                  "target_1": 11
                },
                "Caucasian": {
                  "admissions": 11451,
                  "event_rate": 0.11256658807091084,
                  "patients": 10536,
                  "patients_with_target_0": 9578,
                  "patients_with_target_1": 1228,
                  "target_0": 10162,
                  "target_0_rate": 0.8874334119290892,
                  "target_1": 1289
                },
                "Hispanic": {
                  "admissions": 274,
                  "event_rate": 0.10583941605839416,
                  "patients": 260,
                  "patients_with_target_0": 240,
                  "patients_with_target_1": 26,
                  "target_0": 245,
                  "target_0_rate": 0.8941605839416058,
                  "target_1": 29
                },
                "MISSING_ORIGINAL": {
                  "admissions": 336,
                  "event_rate": 0.050595238095238096,
                  "patients": 330,
                  "patients_with_target_0": 316,
                  "patients_with_target_1": 16,
                  "target_0": 319,
                  "target_0_rate": 0.9494047619047619,
                  "target_1": 17
                },
                "Other": {
                  "admissions": 210,
                  "event_rate": 0.07142857142857142,
                  "patients": 199,
                  "patients_with_target_0": 187,
                  "patients_with_target_1": 15,
                  "target_0": 195,
                  "target_0_rate": 0.9285714285714286,
                  "target_1": 15
                }
              }
            }
          },
          "event_rate_denominator": "admissions",
          "interpretation": "Descriptive counts only; no minimum-size threshold or significance claim.",
          "original_race_missing": {
            "test": 341,
            "train": 1596,
            "validation": 336
          },
          "patient_count_note": "Patients can contribute multiple admissions and both target classes; subgroup patient counts are not additive.",
          "race_views": {
            "race": "public metadata, includes Caucasian imputation",
            "race_original": "observed original race; missing remains missing"
          }
        },
        "status": "completed"
      },
      {
        "block": "cohort",
        "details": {
          "additional_selection": {
            "declared": false,
            "reason": "Free text is neither executed nor echoed; no approved structured selection is implemented.",
            "status": "unverifiable"
          },
          "counts": {
            "test": {
              "admissions": 15265,
              "event_rate": 0.11162790697674418,
              "event_rate_denominator": "admissions",
              "patients": 14111,
              "target_0": 13561,
              "target_1": 1704
            },
            "train": {
              "admissions": 71236,
              "event_rate": 0.11160087596159245,
              "event_rate_denominator": "admissions",
              "patients": 54057,
              "target_0": 63286,
              "target_1": 7950
            },
            "validation": {
              "admissions": 15265,
              "event_rate": 0.11156239764166394,
              "event_rate_denominator": "admissions",
              "patients": 14070,
              "target_0": 13562,
              "target_1": 1703
            }
          },
          "data_unit": "admission/encounter",
          "duplicate_admission_keys": 0,
          "repeated_admissions": "Retained; not duplicate patients or a first-admission cohort.",
          "research_unit": "not declared",
          "row_level_selection": {
            "reason": "Raw source fields are not supplied.",
            "status": "unverifiable"
          },
          "source_selection_description": {
            "criteria": [
              "Inpatient encounters",
              "Diabetes entered as a diagnosis during the encounter",
              "Length of stay between 1 and 14 days",
              "Laboratory tests performed during the encounter",
              "Medications administered during the encounter"
            ],
            "scope": "Source selection description, not row-level certification.",
            "source": "https://archive.ics.uci.edu/dataset/296/diabetes+130-us+hospitals+for+years+1999-2008"
          },
          "total_admissions": 101766,
          "unique_admission_keys": 101766,
          "unique_patients": 71518,
          "upstream_population": {
            "excluded": null,
            "population": null,
            "reason": "Pre-publication source population and exclusion counts are unavailable.",
            "status": "unverifiable"
          }
        },
        "status": "unverifiable"
      },
      {
        "block": "label_observability",
        "details": {
          "encoding": {
            "classes": [
              0,
              1
            ],
            "observed_counts": {
              "test": {
                "admissions": 15265,
                "event_rate": 0.11162790697674418,
                "event_rate_denominator": "admissions",
                "patients": 14111,
                "target_0": 13561,
                "target_1": 1704
              },
              "train": {
                "admissions": 71236,
                "event_rate": 0.11160087596159245,
                "event_rate_denominator": "admissions",
                "patients": 54057,
                "target_0": 63286,
                "target_1": 7950
              },
              "validation": {
                "admissions": 15265,
                "event_rate": 0.11156239764166394,
                "event_rate_denominator": "admissions",
                "patients": 14070,
                "target_0": 13562,
                "target_1": 1703
              }
            },
            "positive_class": 1,
            "status": "passed"
          },
          "followup_completeness": {
            "reason": "No observation end dates or individual 30-day follow-up dates.",
            "status": "unverifiable"
          },
          "interpretation": "Encoded target 0 does not establish complete, event-free 30-day follow-up.",
          "outside_hospital_capture": {
            "reason": "No evidence that readmissions outside participating hospitals are captured.",
            "status": "unverifiable"
          },
          "raw_label_alignment": {
            "reason": "Original readmitted values are not supplied.",
            "status": "unverifiable"
          },
          "target_definition": {
            "expected": {
              "<30": 1,
              ">30": 0,
              "NO": 0
            },
            "mapping": {
              "<30": 1,
              ">30": 0,
              "NO": 0
            },
            "status": "passed"
          }
        },
        "status": "unverifiable"
      },
      {
        "block": "preprocessing_lineage",
        "details": {
          "asset_integrity": {
            "scope": "File hashes and immutable source manifest only; not leakage certification.",
            "status": "passed"
          },
          "current_import": {
            "preprocessing_performed": false,
            "training_performed": false
          },
          "historical_113_pipeline": {
            "reason": "Exact original 113-feature pipeline has not been independently reproduced.",
            "status": "unverifiable"
          },
          "historical_transformations": {
            "imputation": {
              "documented_rule": "Original missing race is Caucasian in public metadata; fit population unknown.",
              "evidence": [
                "Missing original race is imputed as Caucasian in public demographics; preserve the original missing flag."
              ],
              "fit_scope": null,
              "reason": "Exact historical fit rows and transform lineage are not supplied.",
              "status": "unverifiable"
            },
            "scaling": {
              "evidence": [
                "Prepared 113-feature inputs are already standardized; the supplied 120-feature scaler is incompatible and excluded."
              ],
              "fit_scope": null,
              "reason": "Exact historical fit rows and transform lineage are not supplied.",
              "status": "unverifiable"
            },
            "target_encoding": {
              "evidence": [
                "Source target encoding before splitting and historical preprocessing uncertainty prevent a leakage-free holdout claim."
              ],
              "fit_scope": null,
              "reason": "Exact historical fit rows and transform lineage are not supplied.",
              "status": "unverifiable"
            }
          },
          "interpretation": "Do not infer train-only fit, remove suspected features, refit or modify a model.",
          "known_limitations": [
            "Row-stratified public splits have known cross-split patient overlap; do not repartition them.",
            "Public validation was used in model development, not an independent holdout.",
            "Source target encoding before splitting and historical preprocessing uncertainty prevent a leakage-free holdout claim.",
            "Missing original race is imputed as Caucasian in public demographics; preserve the original missing flag.",
            "Prepared 113-feature inputs are already standardized; the supplied 120-feature scaler is incompatible and excluded."
          ],
          "validation_use": {
            "evidence": [
              "Public validation was used in model development, not an independent holdout."
            ],
            "interpretation": "Development reuse is not an independent validation holdout."
          }
        },
        "status": "unverifiable"
      },
      {
        "block": "prediction_timing",
        "details": {
          "candidate_scope": "Name-based screening only, not proof of leakage or safe availability.",
          "completion_information_candidates": [
            "discharge_disposition_id",
            "time_in_hospital",
            "num_lab_procedures",
            "num_procedures",
            "num_medications",
            "number_diagnoses",
            "medication_complexity_score",
            "los_medication_interaction"
          ],
          "documented_availability": {},
          "evidence_gap": "No actual encounter timestamps or verified feature-availability dictionary in published assets.",
          "interpretation": "Admission-time use of completed-stay or discharge information is not assumed.",
          "prediction_time": "No approved prediction-time declaration.",
          "timing_conflicts": [],
          "undocumented_features": [
            "admission_type_id",
            "discharge_disposition_id",
            "admission_source_id",
            "time_in_hospital",
            "num_lab_procedures",
            "num_procedures",
            "num_medications",
            "number_outpatient",
            "number_emergency",
            "number_inpatient",
            "number_diagnoses",
            "A1Cresult_is_missing",
            "weight_is_missing",
            "race_is_missing",
            "medical_specialty_is_missing",
            "payer_code_is_missing",
            "unique_diagnosis_categories",
            "number_outpatient_mean",
            "number_outpatient_max",
            "number_outpatient_sum",
            "number_emergency_mean",
            "number_emergency_max",
            "number_emergency_sum",
            "number_inpatient_mean",
            "number_inpatient_max",
            "number_inpatient_sum",
            "total_visits",
            "medication_complexity_score",
            "care_utilization_risk_score",
            "age_bucket",
            "bmi_underweight",
            "bmi_normal",
            "bmi_overweight",
            "bmi_obese",
            "los_medication_interaction",
            "med_diagnosis_interaction",
            "race_Asian",
            "race_Caucasian",
            "race_Hispanic",
            "race_Other",
            "gender_Male",
            "gender_Unknown_Invalid",
            "weight_0_25)",
            "weight_100_125)",
            "weight_125_150)",
            "weight_150_175)",
            "weight_175_200)",
            "weight_25_50)",
            "weight_50_75)",
            "weight_75_100)",
            "max_glu_serum_300",
            "max_glu_serum_Norm",
            "A1Cresult_8",
            "A1Cresult_Norm",
            "metformin_No",
            "metformin_Steady",
            "metformin_Up",
            "repaglinide_No",
            "repaglinide_Steady",
            "repaglinide_Up",
            "nateglinide_No",
            "nateglinide_Steady",
            "nateglinide_Up",
            "chlorpropamide_No",
            "chlorpropamide_Steady",
            "chlorpropamide_Up",
            "glimepiride_No",
            "glimepiride_Steady",
            "glimepiride_Up",
            "acetohexamide_Steady",
            "glipizide_No",
            "glipizide_Steady",
            "glipizide_Up",
            "glyburide_No",
            "glyburide_Steady",
            "glyburide_Up",
            "tolbutamide_Steady",
            "pioglitazone_No",
            "pioglitazone_Steady",
            "pioglitazone_Up",
            "rosiglitazone_No",
            "rosiglitazone_Steady",
            "rosiglitazone_Up",
            "acarbose_No",
            "acarbose_Steady",
            "acarbose_Up",
            "miglitol_No",
            "miglitol_Steady",
            "miglitol_Up",
            "troglitazone_Steady",
            "tolazamide_Steady",
            "tolazamide_Up",
            "insulin_No",
            "insulin_Steady",
            "insulin_Up",
            "glyburide_metformin_No",
            "glyburide_metformin_Steady",
            "glyburide_metformin_Up",
            "glipizide_metformin_Steady",
            "glimepiride_pioglitazone_Steady",
            "metformin_rosiglitazone_Steady",
            "metformin_pioglitazone_Steady",
            "change_No",
            "diabetesMed_Yes",
            "age_target_encoded",
            "payer_code_target_encoded",
            "medical_specialty_target_encoded",
            "diag_1_target_encoded",
            "diag_2_target_encoded",
            "diag_3_target_encoded",
            "diag_1_cat_target_encoded",
            "diag_2_cat_target_encoded",
            "diag_3_cat_target_encoded"
          ]
        },
        "status": "unverifiable"
      }
    ],
    "reused_ids": [
      "schema",
      "patient_overlap",
      "demographics",
      "cohort"
    ]
  },
  "evaluation_plan": {
    "ai_status": "provided",
    "items": [
      {
        "blocked_reasons": [],
        "evidence": [
          "objectives.evaluation",
          "required.patient_overlap.overlaps",
          "split_counts",
          "probability_output_planned"
        ],
        "id": "roc_auc",
        "reason": "설정된 기본 정책에 포함된 블록입니다. 변별력 목적에 부합하며 추가 매개변수가 필요 없습니다. 정답 양성률이 약 11%이고 환자 중복(train-validation 5,055명 등)이 있어 낙관적일 수 있으며 독립 임상 검증이 아닙니다. 입력은 이후 생성할 계획이며 아직 계산하지 않았습니다. 실제 지표 실행 시 행 정합과 수학적 요건을 다시 검증합니다.",
        "required": false,
        "requires": [
          "y_true",
          "y_probability"
        ],
        "requires_context": [],
        "requires_parameters": [],
        "sources": [
          "default",
          "ai"
        ],
        "state": "eligible_planned_inputs"
      },
      {
        "blocked_reasons": [],
        "evidence": [
          "coordinated.cohort",
          "required.patient_overlap.status",
          "labels_planned"
        ],
        "id": "average_precision",
        "reason": "설정된 기본 정책에 포함된 블록입니다. 양성률이 낮은 불균형 자료에서 양성 탐지 성능을 보완합니다. 임계값이 필요 없으나 분할 간 환자 중복과 개발 재사용으로 해석에 제한이 있습니다. 입력은 이후 생성할 계획이며 아직 계산하지 않았습니다. 실제 지표 실행 시 행 정합과 수학적 요건을 다시 검증합니다.",
        "required": false,
        "requires": [
          "y_true",
          "y_probability"
        ],
        "requires_context": [],
        "requires_parameters": [],
        "sources": [
          "default",
          "ai"
        ],
        "state": "eligible_planned_inputs"
      },
      {
        "blocked_reasons": [],
        "evidence": [
          "objectives.evaluation",
          "probability_output_planned",
          "coordinated.label_observability"
        ],
        "id": "brier_score",
        "reason": "설정된 기본 정책에 포함된 블록입니다. 확률 품질 목적에 맞는 지표로 확률 출력이 계획되어 있습니다. 환자 중복과 정답 0의 추적 불완전 가능성으로 절대 해석은 제한됩니다. 입력은 이후 생성할 계획이며 아직 계산하지 않았습니다. 실제 지표 실행 시 행 정합과 수학적 요건을 다시 검증합니다.",
        "required": false,
        "requires": [
          "y_true",
          "y_probability"
        ],
        "requires_context": [],
        "requires_parameters": [],
        "sources": [
          "default",
          "ai"
        ],
        "state": "eligible_planned_inputs"
      },
      {
        "blocked_reasons": [],
        "evidence": [
          "objectives.evaluation",
          "parameters.n_bins_defined",
          "probability_output_planned"
        ],
        "id": "calibration_curve",
        "reason": "설정된 기본 정책에 포함된 블록입니다. 예측 확률과 관찰 사건률의 구간별 일치를 확인합니다. n_bins는 미정이라 기본값 사용 여부를 사람이 검토해야 하며 소수 하위집단의 해석은 표본 수에 제한됩니다. 입력은 이후 생성할 계획이며 아직 계산하지 않았습니다. 실제 지표 실행 시 행 정합과 수학적 요건을 다시 검증합니다.",
        "required": false,
        "requires": [
          "y_true",
          "y_probability"
        ],
        "requires_context": [],
        "requires_parameters": [],
        "sources": [
          "default",
          "ai"
        ],
        "state": "eligible_planned_inputs"
      }
    ],
    "objectives": [
      "discrimination",
      "probability_quality"
    ],
    "parameters": {},
    "planning_complete": true,
    "primary_metric": null,
    "selected_ids": [
      "roc_auc",
      "average_precision",
      "brier_score",
      "calibration_curve"
    ],
    "threshold": null
  },
  "generated_at": "2026-10-17T08:46:58.503533+00:00",
  "local_smoke": null,
  "pipeline": {
    "issue_number": 1,
    "repository": "t-hajongkim/Medical-ML-SDLC-Test4",
    "source_run": "39018178235",
    "stage": "evaluation-plan",
    "status": "success"
  },
  "purpose": "GitHub Actions aggregate stage snapshot",
  "remote_model_evaluation": null,
  "remote_pr1": {
    "code_commit": "a13c64b7320042a6fac7f36c7aa972b41279d800",
    "head": "29fdfc46025590cf1e707dc5e5c7501ac277d19d",
    "issue": 1,
    "merge_at": null,
    "merge_commit": null,
    "pr": 2,
    "repository": "t-hajongkim/Medical-ML-SDLC-Test4",
    "source_run": "39018178235",
    "status": "open",
    "url": "https://github.com/t-hajongkim/Medical-ML-SDLC-Test4/pull/2"
  },
  "remote_pr2": null,
  "schema": 1,
  "target": {
    "additional_requests": "EDA 결과와 데이터 제약을 근거로 평가 지표 추천 초안을 제시해 주세요.\n이 Issue 단계에서는 모델 학습·추론·최종 성능 평가를 실행하지 않습니다.",
    "cohort_requirements": "제공된 train 71,236행, validation 15,265행, test 15,265행 전체를 점검합니다.\n기존 분할을 변경하거나 새로 나누지 않습니다.\n추가 포함·제외 조건은 없습니다.",
    "issue_number": 1,
    "issue_url": "https://github.com/t-hajongkim/Medical-ML-SDLC-Test4/issues/1",
    "prediction_time": null,
    "public_data_confirmation": true,
    "repository": "t-hajongkim/Medical-ML-SDLC-Test4",
    "research_goal": "당뇨병 입원 환자의 30일 이내 재입원 평가를 준비합니다.\n제공된 데이터의 분할·품질과 연령·성별·인종별 분포를 점검하고,\nEDA 결과를 근거로 평가 지표와 해석 시 주의사항을 검토합니다.",
    "research_question": "- 스키마·특성 순서·결측·비정상 수치가 준비 데이터 명세와 일치하는가?\n- train/validation/test 사이의 환자 중복은 어느 정도인가?\n- 연령·성별·인종별 표본 수와 재입원 정답 분포는 어떻게 다른가?\n- 원본 결측과 전처리 대치값을 구분해 해석할 수 있는가?",
    "schema_version": 1,
    "selection_execution": false,
    "title": "[Diabetes] 30일 이내 재입원 데이터 점검"
  }
}
;
