import React from "react";
import Panel from "../../components/Panel/Panel";
import { useDataStateContext } from "./DataStateContext";
import Badge from "../../components/Badge/Badge";
import CircleBadge from "../../components/Badge/CircleBadge";
import TableContent from "../../components/ContentComponents/TableContent";
import TreeTableContent from "../../components/ContentComponents/TreeTableContent";
import Files from "../../components/Files/Files";
const { state, dispatch } = useDataStateContext();
