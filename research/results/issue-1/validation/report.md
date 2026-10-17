# 고정 모델 추론·평가 결과

- 분할: `validation` / 행수: `15265`
- 원본 EDA 판정: `failed`
- 주지표: `None` / 계획 hash: `f6bbb96c724c7c71d57fbad535f75d5fa5dc5c8600c239d5f910e544d06050ef`
- 새 학습·전처리·재분할·임상 사용 승인: 수행하지 않음
- 확률·정답·식별자·특성 벡터는 게시하지 않습니다.

## 출처

```json
{
  "execution_code_commit": "d8627918a9b0e47687bdc909dd83cce41ce599a9",
  "issue_number": 1,
  "merge_commit": "d8627918a9b0e47687bdc909dd83cce41ce599a9",
  "plan_code_commit": "a13c64b7320042a6fac7f36c7aa972b41279d800",
  "pull_request": 2,
  "repository": "t-hajongkim/Medical-ML-SDLC-Test4",
  "workflow_run_url": "https://github.com/t-hajongkim/Medical-ML-SDLC-Test4/actions/runs/39020110095"
}
```

## roc_auc · completed

```json
{
  "value": 0.8151440031873799,
  "details": {
    "definition": "P(score_positive > score_negative) + 0.5 * P(tie)",
    "denominator": 23096086,
    "negative_count": 13562,
    "positive_count": 1703,
    "sample_count": 15265
  }
}
```

## average_precision · completed

```json
{
  "value": 0.3107697977221591,
  "details": {
    "definition": "AP = sum((recall_i - recall_previous) * precision_i) at distinct scores",
    "denominator": 1703,
    "not_trapezoidal_pr_area": true,
    "positive_count": 1703,
    "sample_count": 15265
  }
}
```

## brier_score · completed

```json
{
  "value": 0.17664724490402234,
  "details": {
    "definition": "mean((y_probability - y_true) ** 2)",
    "denominator": 15265,
    "sample_count": 15265
  }
}
```

## calibration_curve · completed

```json
{
  "value": [
    {
      "bin": 0,
      "count": 116,
      "lower": 0.0,
      "mean_predicted_probability": 0.0860871301288867,
      "observed_event_rate": 0.017241379310344827,
      "upper": 0.1,
      "upper_inclusive": false
    },
    {
      "bin": 1,
      "count": 4076,
      "lower": 0.1,
      "mean_predicted_probability": 0.1592065786572986,
      "observed_event_rate": 0.012021589793915604,
      "upper": 0.2,
      "upper_inclusive": false
    },
    {
      "bin": 2,
      "count": 3735,
      "lower": 0.2,
      "mean_predicted_probability": 0.2427927774557745,
      "observed_event_rate": 0.03614457831325301,
      "upper": 0.3,
      "upper_inclusive": false
    },
    {
      "bin": 3,
      "count": 1596,
      "lower": 0.3,
      "mean_predicted_probability": 0.34352947833039643,
      "observed_event_rate": 0.05075187969924812,
      "upper": 0.4,
      "upper_inclusive": false
    },
    {
      "bin": 4,
      "count": 1170,
      "lower": 0.4,
      "mean_predicted_probability": 0.44816034523988135,
      "observed_event_rate": 0.1188034188034188,
      "upper": 0.5,
      "upper_inclusive": false
    },
    {
      "bin": 5,
      "count": 1191,
      "lower": 0.5,
      "mean_predicted_probability": 0.5506449369987308,
      "observed_event_rate": 0.21158690176322417,
      "upper": 0.6,
      "upper_inclusive": false
    },
    {
      "bin": 6,
      "count": 1102,
      "lower": 0.6,
      "mean_predicted_probability": 0.6478434185706027,
      "observed_event_rate": 0.2631578947368421,
      "upper": 0.7,
      "upper_inclusive": false
    },
    {
      "bin": 7,
      "count": 831,
      "lower": 0.7,
      "mean_predicted_probability": 0.7464532281652855,
      "observed_event_rate": 0.3008423586040915,
      "upper": 0.8,
      "upper_inclusive": false
    },
    {
      "bin": 8,
      "count": 844,
      "lower": 0.8,
      "mean_predicted_probability": 0.850492086949511,
      "observed_event_rate": 0.33649289099526064,
      "upper": 0.9,
      "upper_inclusive": false
    },
    {
      "bin": 9,
      "count": 604,
      "lower": 0.9,
      "mean_predicted_probability": 0.9382203235009017,
      "observed_event_rate": 0.3658940397350993,
      "upper": 1.0,
      "upper_inclusive": true
    }
  ],
  "details": {
    "bin_rule": "[lower, upper), except final bin includes 1",
    "definition": "per-bin mean predicted probability, observed positive fraction, and count",
    "denominator": "count in each bin; empty bin means are null",
    "n_bins": 10,
    "sample_count": 15265,
    "strategy": "uniform"
  }
}
```

## 해석 한계

- Row-stratified public splits have known cross-split patient overlap; do not repartition them.
- Public validation was used in model development, not an independent holdout.
- Source target encoding before splitting and historical preprocessing uncertainty prevent a leakage-free holdout claim.
- Missing original race is imputed as Caucasian in public demographics; preserve the original missing flag.
- Prepared 113-feature inputs are already standardized; the supplied 120-feature scaler is incompatible and excluded.
- 환자 단위 분할 간 중복은 실제 patient_nbr로 측정하며 입원 ID로 대신하지 않습니다.
- 인종 결측 대체와 원본 결측은 별도 필드로 보존합니다.
- 등록된 준비 데이터와 대응 모델에 한정되며 임의 원자료나 모든 ML 문제의 자동 지원을 의미하지 않습니다.
- 새 데이터에는 운영자의 profile, data_id 및 대응 이미지 등록이 필요합니다.
- Frozen prepared features only; no new training, preprocessing or split.
- Patient overlap and development reuse of validation remain; this is not an independent clinical validation.
- Thresholds, reference predictions and clinical actions are never invented.
